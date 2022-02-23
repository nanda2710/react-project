import { Button } from "react-bootstrap";
function Register(){
    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                
                                <Button style={{marginTop:"30px"}}>Regist</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;