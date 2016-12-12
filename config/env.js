const allEnvs = {
    product: {
        env: 'product',
        api_url: 'http://m.mingyizhudao.com',
        file_url: 'http://file.mingyizhudao.com'
    },
    release: {
        env: 'release',
        api_url: 'http://wap.dev.mingyizd.com',
        file_url: 'http://121.40.127.64:8089'
    },
    dev: {
        env: 'dev',
        api_url: 'http://192.168.10.18',
        file_url: 'http://121.40.127.64:8089'
    },
    localhost: {
        env: 'localhost',
        api_url: 'http://192.168.10.18',
        file_url: 'http://121.40.127.64:8089'
    }
}
let envs = allEnvs.dev//默认连接dev开发环境
switch (window.location.host) {
    case 'demowap.mingyizd.com': {
        envs = allEnvs.product;
        break;
    }
    case 'http://121.40.127.64:8022': {
        envs = allEnvs.release;
        break;
    }
    case 'localhost:9000': {
        envs = allEnvs.localhost;
        break;
    }
}
module.exports = envs;