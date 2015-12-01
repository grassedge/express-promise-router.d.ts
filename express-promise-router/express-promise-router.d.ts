declare module "express-promise-router" {
    import * as express from 'express';

    function router(options?: any): express.Router;
    module router {
    }
    export = router
}
