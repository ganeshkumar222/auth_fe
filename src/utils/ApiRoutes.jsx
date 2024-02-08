const ApiRoutes =  {
    Sign_in:{
        path:"student/login",
        authenticate:true
    },
    sign_up:{
        path:"student/createstudent",
        authenticate:false
    },
    get_users:{
        path:"student/getallstudents",
        authenticate:true
    },
    delete_users:{
        path:"student/deletestudent",
        authenticate:true
    },
    edit_users:{
        path:"student/editstudent",
        autheticate:false
    },
    check_password:{
        path:"student/checkpassword",
        authenticate:false
    },
    change_password:{
        path:"student/changepassword",
        authenticate:false
    },
    forget_password:{
        path:"student/forgetpassword",
        authenticate:false
    }
}

export default  ApiRoutes