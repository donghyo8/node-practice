module.exports = {
    failedConnectionServer : async (res : any ,error: any) => {
        res.status(200).send({
            result : 'failed',
            data : [],
            message: `Request server failed. Error : ${error}`
        })
    }
}
export default {module, async failedConnectionServer(res : any ,error: any){}}

