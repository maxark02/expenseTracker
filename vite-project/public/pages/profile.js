export function profilePage() {
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
            <h2>Profile</h2>
        </div>
        <div class="group-btn">
        <img src="static/group 1.png" alt="Menu">
</div>
    </div>


<div class="user-info">
              <div class="user-info-name">
                <h1>{name}</h1>
                     <div class="user-phone-mail">
                {phone-number}
                <br>
                                {mail}

</br>
                    </div>

             </div>
              <div class="user-info-img">
            <img src="/static/user-def.png" alt="User Image">
                 </div>

          </div>
    </div>

     <div class="payment-methods">
         <h2>Payment Methods</h2>

           <div class="payment-button">
    <button>
    <img src="/static/Vector.png" alt="Add Payment Method">
    <p>Bank Balance</p>
</button>   
 
   <button>
   <img src="/static/cash.png" alt="Add Payment Method">
   <p>Physical Cash</p>
</button>
           </div>
         </div>

       <div class="cards">
            <h2>Cards</h2>

              <div class="payment-button">
    <button>
    <img src="/static/credit.png" alt="Add Payment Method">
    <p>Credit Card</p>
</button>   
 
   <button>
   <img src="/static/cash.png" alt="Add Payment Method">
   <p>Debit Card</p>
</button>
</div>
          </div>
`









}
