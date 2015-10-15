module.exports={
    pact :{
        command: "echo <%= pkg %>",
        options: {
            execOptions: {
                "cwd": "."
            }
        }
    }
};