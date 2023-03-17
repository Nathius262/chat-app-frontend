function MessageBody(){
    return `
    <nav id="nav">
        <ul class="list-unstyled mt-4 d-flex justify-content-between container">
            <li class="list-img px-0 pt-3 pb-1 d-flex align-items-center">
                <div class="img-profile"></div>
                <p class="fs-4 fw-bold d-grid">
                    <span id="chat-with">Chat with mike</span>
                    <span class="fs-6 fw-light">3 messages</span>
                </p>
            </li>
            
        </ul>
    </nav>
    <div class="message-body container" id="message-body">           
        
        <ul class="list-unstyled mt-4" id="message-body-list">
            
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