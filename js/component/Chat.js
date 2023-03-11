function Chat(){
    let chathtml = `
        <div class="row">
            <div class="col-md-4 container py-3" id="col1">
                <div id="sidbar-nav"></div>
                <div id="search" class="d-inline-flex align-items-center justify-content-center">
                    <input id="search-input" class="form-control p-3 bg-dark text-light border-0 container" type="text" placeholder="Search...">
                    <span class="text-secondary bg-dark"><i class="fa fa-search"></i></span>                    
                </div>

                <div id="list-profile">
                    <ul class="list-unstyled mt-4">
                        <li class="list-img friend-item px-0 pt-3 pb-1 d-flex align-items-center">
                            <div class="img-profile"></div>
                            <p class="fs-4 fw-bold">nathan</p>
                        </li>
                        <li class="list-img friend-item px-0 pt-1 pb-1 d-flex align-items-center">
                            <div class="img-profile"></div>
                            <p class="fs-4 fw-bold">mike</p>
                        </li>
                        <li class="list-img friend-item px-0 pt-3 pb-1 d-flex align-items-center">
                            <div class="img-profile"></div>
                            <p class="fs-4 fw-bold">jerry</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col container p-0" id="col2">
                <nav id="nav">                    
                </nav>
                <div class="message-body container" id="message-body">
                    
                </div>

                <div class="message d-flex container p-4" id="message-submit">                    
                </div>
            </div>
        </div>
    `
    
    return chathtml
}

export {Chat}