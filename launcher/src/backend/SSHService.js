const { readFileSync } = require('fs');
const { Client } = require('ssh2');
const tunnel = require('tunnel-ssh');
const fs = require('fs')
const log = require('electron-log');

export class SSHService {

    constructor() {
        this.conn = null;
        this.connectionInfo = null;
        this.connected = false;
    }

    static checkExecError(err) {
        return !err || err.rc != 0;
    }

    static extractExecError(err) {
        return err && err.stderr ? err.stderr : "<stderr empty>";
    }

    async connect(connectionInfo) {
        this.connectionInfo = connectionInfo;
        this.conn = new Client();

        return new Promise((resolve, reject) => {
            this.conn.on('error', (error) => {
                this.conn.end();
                reject(error);
            });
            this.conn.on('ready', () => {
                this.connected = true;
                resolve(this.conn);
            }).connect({
                host: connectionInfo.host,
                port: connectionInfo.port || 22,
                username: connectionInfo.user || 'root',
                password: connectionInfo.password || undefined,
                privateKey: connectionInfo.privateKey || undefined,
                keepaliveInterval: 30000,
            });
        })
    }

    async disconnect(connectionInfo) {

        log.info('DISCONNECT: connectionInfo', this.connectionInfo.host)

        return new Promise((resolve, reject) => {
            try {
                this.conn.end();
                this.connected = false;
                resolve(true);
            } catch(error) {
                reject(error);
            }
        })
    }

    async exec(command) {
        return this.exec(command, command);
    }

    async exec(command, logline) {
        log.info('exec', logline)

        return new Promise((resolve, reject) => {
            let data = {
                rc: -1,
                stdout: '',
                stderr: '',
            }
            this.conn.exec(command, (err, stream) => {
                if (err) return reject(err);
                stream
                    .on('close', (code, signal) => {
                        log.info('stream closed', code);
                        data.rc = code;
                        resolve(data);
                    })
                    .on('data', (stdout) => {
                        log.info('stdout got data', stdout.toString('utf8'));
                        data.stdout = stdout.toString('utf8');
                    })
                    .stderr.on('data', (stderr) => {
                        log.info('stderr got data', stderr.toString('utf8'));
                        data.stderr = stderr.toString('utf8');
                    });
                
            })
        });
    }

    async tunnel(tunnelConfig) {
        return new Promise((resolve, reject) => {
            var config = {
                keepAlive: true,
                username: this.connectionInfo.user || 'root',
                password: this.connectionInfo.password,
                host: this.connectionInfo.host,
                port: this.connectionInfo.port || 22,
                dstHost: 'localhost',
                dstPort: tunnelConfig.dstPort,
                localHost:'localhost',
                localPort: tunnelConfig.localPort,
                privateKey: this.connectionInfo.privateKey || undefined,
            };

            var server = tunnel(config, (error, server) => {
                if (error) {
                    log.error('Tunnel Connection failed!');
                    return reject(error);
                }
                log.info(`Tunnel Connection established! (${tunnelConfig.localPort})`);
                resolve(server);
            });

            server.on('error', function(error) {
                log.error('Tunnel connection error: ', error);
            });
        });
    }

}