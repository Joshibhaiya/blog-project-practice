class FrontController{

    static index =async(req,res) =>{
        try{
            res.render('index')
        } catch (error){
            console.log(error)
        }
    }

    static about =async(req,res) =>{
        try{
            res.render('about')
        } catch (error){
            console.log(error)
        }
    }

    static blog =async(req,res) =>{
        try{
            res.render('blog')
        } catch (error){
            console.log(error)
        }
    }

    static contact =async(req,res) =>{
        try{
            res.render('contact')
        } catch (error){
            console.log(error)
        }
    }

    static cyb =async(req,res) =>{
        try{
            res.render('cyb')
        } catch (error){
            console.log(error)
        }
    }





}

module.exports =FrontController