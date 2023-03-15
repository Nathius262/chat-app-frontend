function MessageBody(data){
    return `
    <nav id="nav">
        <ul class="list-unstyled mt-4 d-flex justify-content-between container">
            <li class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <p class="fs-4 fw-bold d-grid">
                    Chat with mike
                    <span class="fs-6 fw-light">3 messages</span>
                </p>
            </li>
            
        </ul>
    </nav>
    <div class="message-body container" id="message-body">
            
        
        <ul class="list-unstyled mt-4">
            <li class="sender list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">                            
                <div class="">
                    <p class="message-text-sender shadow fs-4 fw-bold mb-0">Hi nath this is awesome</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                <div class="img-profile"></div>
                
            </li>
            
            <li class="receiver list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <div class="">
                    <p class="message-text-receiver shadow fs-4 fw-bold mb-0">Hi! whoever you are just wanted be sure that you're doing what you to do</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                
            </li>

            <li class="receiver list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <div class="">
                    <p class="message-text-receiver shadow fs-4 fw-bold mb-0">Hi nath this is awesome</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                
            </li>

            <li class="sender list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">                            
                <div class="">
                    <p class="message-text-sender shadow fs-4 fw-bold mb-0">Hi nath this is awesome</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                <div class="img-profile"></div>
                
            </li>

            <li class="receiver list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <div class="">
                    <p class="message-text-receiver shadow fs-4 fw-bold mb-0">Hi nath this is awesome</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                
            </li>
            <li class="sender list-img px-0 pt-3 pb-1 pt-1 d-flex align-items-center">                            
                <div class="">
                    <p class="message-text-sender shadow fs-4 fw-bold mb-0">Hi nath this is awesome</p>
                    <p class="fs-6 fw-light mt-0 px-2">30 Wed 15:12</p>
                </div>
                <div class="img-profile"></div>
                
            </li>
            
        </ul>
    </div>

    <div class="message d-flex container p-4" id="message-submit">                    
        
        <input type="text" id="message" class="form-control bg-dark text-light border-0 container p-4 fs-4" placeholder="Type your message...">
        <button class="btn btn-secondary px-5"><i class="fa fa-send"></i></button>
    </div>
    `
}

function MessageSubmit(){
    return `
        <input type="text" id="message" class="form-control bg-dark text-light border-0 container p-4 fs-4" placeholder="Type your message...">
        <button class="btn btn-secondary px-5"><i class="fa fa-send"></i></button>
    `
}

export {MessageBody, MessageSubmit}