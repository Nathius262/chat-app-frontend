function Navbar(){
    return `
        <ul class="list-unstyled mt-4 d-flex justify-content-between container">
            <li class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <p class="fs-4 fw-bold d-grid">
                    Chat with mike
                    <span class="fs-6 fw-light">3 messages</span>
                </p>
            </li>
            <li class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                <div class="d-flex">
                    <i class="fa fa-flash btn btn-light rounded-4 align-self-center me-3 fs-4"></i>
                <i class="fa fa-bell fs-4 btn btn-outline-light"></i> 
                </div>
                
            </li>
        </ul>`
}

export {Navbar};