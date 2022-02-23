import { Button } from "react-bootstrap";

function Login(){
    return(
        <div style={{marginTop: "100px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group" style={{marginTop:"10px"}}>
                                    <label>Username</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group" style={{marginTop:"10px"}}>
                                    <label>Password</label>
                                    <input type={"password"} className="form-control"></input>
                                </div >

                                <Button style={{marginTop:"30px"}}>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;