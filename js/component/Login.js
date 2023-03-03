function Login(){
    return `
    <div class="modal modal-tour py-5" tabindex="-1" role="dialog" id="modalLogin">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-body p-5">
                <div class="d-grid text-center mb-3 align-items-center justify-content-center">
                    <h2>Glory Chat Login</h2><hr>
                    
                </div>
                <form class="needs-validation" id="loginForm" novalidate="">
                    <div class="row g-3">
        
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="you@example.com" required="" autocomplete="email">
                        <div class="invalid-feedback">
                        Please enter a valid email address.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">password</label>
                        <input name="password" type="password" class="form-control" id="password" placeholder="password" required="" autocomplete="password">
                        <div class="invalid-feedback">
                            Please enter a valid password.
                        </div>
                    </div>

                    <div class="text-danger" id="errormsg">
                    </div>
        
                    <hr class="my-4">
                    <button class="w-100 btn btn-dark btn-lg" type="submit">Login</button>
                </form>
                
                <!----<button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Great, thanks!</button>----->
                </div>
            </div>
        </div>
    </div>
    `
}

function MustAuthenticate(){
    return `
        <div>
            <p>please authenticate</p>
        </div>
    
    `
}

export {Login, MustAuthenticate}