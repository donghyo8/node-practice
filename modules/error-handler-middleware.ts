function errorHandler(err: any, req: any, res: any, next: any) {
    console.log(err);
    res.status(err.status).send("error");
}

export default errorHandler