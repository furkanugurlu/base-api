class Response {
    constructor(data = null , message = null ){ 
        this.data = data
        this.message = message
    }

    success (res) { 
        return res.status(200).json({
            success : true,
            data:this.data,
            message :this.message ?? 'Transaction successful!'
        })
    }
    created (res) { 
        return res.status(201).json({
            success : true,
            data:this.data,
            message :this.message ?? 'Transaction successful!'
        })
    }
    error500 (res) { 
        return res.status(500).json({
            success : false,
            data:this.data,
            message :this.message ?? 'Transaction failed!'
        })
    }
    error400 (res) { 
        return res.status(400).json({
            success : false,
            data:this.data,
            message :this.message ?? 'Transaction failed!'
        })
    }
    error401 (res) { 
        return res.status(401).json({
            success : false,
            data:this.data,
            message :this.message ?? 'Please login!'
        })
    }
    error404 (res) { 
        return res.status(404).json({
            success : false,
            data:this.data,
            message :this.message ?? 'Transaction failed!'
        })
    }
    error429 (res) { 
        return res.status(429).json({
            success : false,
            data:this.data,
            message :this.message ?? 'Too many requests dropped!'
        })
    }
}

module.exports = Response