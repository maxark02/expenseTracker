export function categoryPage() {
    return `
    <div class="close-button-payment">
<img src="/static/interface/close-lg.png" alt="Close Button"
data-route="/home"
>

</div>

<div class="amount-method">
    <button>INCOME</button>|
    <button>EXPENSE</button>
</div>


<div class="category-card">

<h2>Transaction</h2>
<p>{transaction-date}</p>

</div>
<div class="category-card">

<h2>Category</h2>
<p>{category}</p>

</div>
<div class="category-card">

<h2>Amount</h2>
<p>{amount}</p>

</div>
<div class="category-card">

<h2>Currency</h2>
<p>{currency}</p>

</div>

<div class="category-card">

<h2>Payment method</h2>
<p>{payment-method}</p>

</div>
<div class="category-card">

<h2>Describtion</h2>
<p>{describtion}</p>

</div>


</div>







`
}