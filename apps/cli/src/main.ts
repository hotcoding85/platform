import { BootstrapConsole } from 'nestjs-console'
import { AppModule } from './app/app.module'

const bootstrap = new BootstrapConsole({
  module: AppModule,
  useDecorators: true,
})

bootstrap
  .init()
  .then(async (app) => {
    try {
      await app.init()
      await bootstrap.boot()
      await app.close()
    } catch (e) {
      console.error(e)
      await app.close()
      process.exit(1)
    }
  })
  .catch((err) => {
    throw err
  })
