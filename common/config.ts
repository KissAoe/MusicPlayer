'use struct'

enum Env {
    Prod = 'prod',
    Test = 'test',
    Dev = 'dev',
}

// 获取当前环境
const getEnv = (): Env => {
  switch (process.env.NODE_ENV) {
    case 'development': return Env.Dev
    case 'dev': return Env.Dev
    case 'test': return Env.Test
    case 'prod': return Env.Prod
  }

  return Env.Dev
}

const isDev = (): boolean => {
    return getEnv() === Env.Dev
}

export {
    Env, getEnv, isDev
}