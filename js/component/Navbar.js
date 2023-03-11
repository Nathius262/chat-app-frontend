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
            
        </ul>`
}

function SidebarNavbar(){
    return `
        
        <ul class="list-unstyled mt-1 mb-3 d-flex justify-content-between align-items-center">
            <li class="list-img px-0 pt-3 pb-1">
                <div class="img-profile"></div>
            </li>
            <li id="navIcon" class="list-img">

                <i class="fa fa-flash btn btn-light rounded-4 fs-4 mx-3"></i>
                <i class="fa fa-ellipsis-v fs-4 align-self-center" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false"></i>

                <div class="container" id="dropdown-container">
                    <div class="dropdown-menu" aria-labelledby="dropdown04" id="dropdown">
                        <p>testt</p>
                    </div>
                </div>
                
            </li>
            
        </ul><hr class="fs-3 text-light">
        `
}


export {Navbar, SidebarNavbar};