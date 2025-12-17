export function walletPage() {
    return ` 
 <div class="navbar">
        <div class="options">
            <button>
                <img src="static/Left.png" alt="Menu"
                data-route="/home"

                >
            </button>
        </div>
        <div id="title-header">
            <h2>Wallet</h2>
        </div>
        <div class="group-btn">
        <img src="static/group 1.png" alt="Menu">
</div>
    </div>


<div class="wallet-cards">
<h2>Cards</h2>
</div>


     <div class="wallet-card">
    <img src="/static/Cart1.png" alt="Add Payment Method">
</div>
        <div class="card-balance">
        <h2>{card-balance}</h2>
        <p>Card Balance</p>
        </div>


            <div class="add-card">
            <div class="add-cards">
            <h2>+ Add card</h2>
            <p>Add credit card / debit card</p>
   </div>
   <form>
   <input id="number" type="text" placeholder="Card number" />
   <input id="password" type="password" placeholder="Password" />
</form>

       <div class="card-add-button">
       
       <button type="submit">
       <h3>Add card</h3>
</button>
</div>
       
  </div>
    `
}