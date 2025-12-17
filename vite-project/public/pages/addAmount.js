export function addAmountPage() {
    return `<div class="close-button-payment">
<img src="/static/interface/close-lg.png" alt="Close Button"
data-route="/home"

>
<h4>Payment method
<img src="/static/arrowdownyellow.png" alt="Category" id="payment-method-img">
</h4>
</div>

    <div class="amount-method">
    <button>INCOME</button>|
    <button>EXPENSE</button>
</div>
<div class="category">
    <p data-route="/category">Category 
    <img src="/static/arrowdown.png" alt="Category">
    </p>

</div>


<div class="amount-input">
    <input type="number" placeholder="0" />
    <button type="submit">Insert Template</button>
</div>
     


`
}