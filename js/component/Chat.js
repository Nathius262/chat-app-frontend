function Chat(){
    return `
    <div class="row">
        <div class="col-md-3 container rounded-4 py-3" id="col1">
            <div id="search" class="d-flex align-items-center justify-content-center">
                <input id="search-input" class="form-control bg-dark text-light border-0 container" type="text" placeholder="Search...">
                <span class="text-secondary bg-dark"><i class="fa fa-search"></i></span>                    
            </div>

            <div id="list-profile">
                <ul class="list-unstyled mt-4">
                    <li id="profile1" class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                        <div class="img-profile"></div>
                        <p class="fs-4 fw-bold">nathan</p>
                    </li>
                    <li id="profile2" class="list-img px-0 pt-1 pb-1 d-flex align-items-center">
                        <div class="img-profile"></div>
                        <p class="fs-4 fw-bold">mike</p>
                    </li>
                    <li id="profile3" class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                        <div class="img-profile"></div>
                        <p class="fs-4 fw-bold">jerry</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-8 container p-0 rounded-4" id="col2">
            <nav id="nav">                    
            </nav>
            <div class="message-body" id="message-body">
                
            </div>

            <div class="message d-flex" id="message-submit">                    
            </div>
        </div>
    </div>
    `
}

export {Chat}