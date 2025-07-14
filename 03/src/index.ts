import  { Express,  } from "express";
import cors from "cors";
import {BasePath,
    BearerTokenJWT,
    Description,
    SwaggerInitializer,
    Title,
    Version,
    ExpressInitializer} from "express-swagger-autoconfigure";

// Configure a class with the first configuration
@SwaggerInitializer
@SwaggerEndpoint("/documentation") // swagger documentation will be available on http://localhost:5000/documentation (Optional, default /)
@ApiDefaultPath("/api") // swagger request to http://localhost:5000/api/endpoint | (Optional, default /)
@Description("Essa api é responsável pelo exemplo de utilização do express-swagger-autoconfigure")
@Title("Example-of-express-swagger-autoconfigure")
@Version("1.0.0")
@BearerTokenJWT(true)
@Theme(ThemesType.FEELING_BLUE)
export default class App {

    @ExpressInitializer
    private app: Express;

    constructor () {
        this.configApp();
        this.initControllers();
    }

    private configApp():void {
        this.app.use( cors() );
    }

    private initControllers(){
        // It is important to instantiate all of your controllers
        // in this class so that the decorators can be applied.
        new MyController1();
        new MyController2();
    }
    public getApp(): Express {
        return this.app;
    }
}