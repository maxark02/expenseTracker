export function homePage() {
    return `
 <div class="navbar">
        <div class="options" id="sidebar">
            <button>
                <img src="static/interface/hamburger-menu.png" alt="Menu" id="menu">
                <div class="opt-profile">
            <img src="static/user-def.png" alt="Profile" id="profile-img">
            <div class="opt-user-info">
                        <h3>{username}</h3>
                        <h6>Expensify</h6>
                                            
</div>
            <img src="static/edit.png" alt="Profile" id="edit">
</div>

                        <li id="premium">
                        <img src="static/ecommerce/shipping-box.png" alt="Premium" id="premium-img"></img>
                        Get Premium</li>
                        
                        <li>
                        <img src="static/Vectoryellow.png" alt="Premium">

                        Records</li>

                        <li>
                        <img src="static/bank.png" alt="Premium>
                        Banc Sync</li>

                        <li>
                        <img src="static/ecommerce/invoice-paper.png" alt="Premium">

                        Imports</li>

                        <li>
                        <img src="static/ecommerce/balance.png" alt="Premium">

                        Reciepts</li>
                        
                        <li>
                        <img src="static/ecommerce/price-tag-rotate.png" alt="Premium">

                        Tags</li>
                        
                        <li>
                        <img src="static/ecommerce/balance.png" alt="Premium">

                        Cards</li>
                        
                        <li>
                        <img src="static/interface/add-circle.png" alt="Premium">

                        Set Budget</li>
                        
                        <li>
                        <img src="static/ecommerce/cvv.png" alt="Premium">

                        CVV</li>
                        
                        <li>
                        <img src="static/interface/todo.png" alt="Premium">

                        Lists</li>
                        
                        <li>
                        <img src="static/settings.png" alt="Premium">

                        Settings</li>

                        

            </button>
            
        </div>
        
        
        
        
        <div id="title-header">
            <h2>Expense</h2>
        </div>
    </div>
             <div class="balance">
                 <h2 id="balance">Available Balance</h2>
                     <h3>{Balance}</h3>
           </div>

             <div class="transaction">
             <p>My transactions</p>

             <div class="transactions">
            <div class="transaction-card">
                <img src="/static/default.png" alt="Transaction">

                <div class="transaction-img-date">
                    <h3>
                        {transaction-name}
                    </h3>
                    <h4>
                        {date}

                    </h4>
                </div>
                    <div class="amount">
                        <button>{amount}</button>
                    </div>
                
            </div>
            
            <div class="add">
            <button id="add-card" data-route="/add-amount">
           <p>+</p> 
            </button>

            </div>`
}