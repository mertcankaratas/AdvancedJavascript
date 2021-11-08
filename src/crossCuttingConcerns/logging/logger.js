export  class BaseLogger{
    log(data){
        console.log("Default Logger : " + data);
    }
}
export  class ElastikLogger extends BaseLogger{
    // *  BaseLogger log override
    log(data){
        console.log("Logged to Elastic" + data);
    }
}

export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data);
    }
}