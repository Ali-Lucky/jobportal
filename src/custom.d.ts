declare global {
    namespace NodeJS {
        interface processEnv {
            PORT: number
            DB_URI: string
        }
    }
}
