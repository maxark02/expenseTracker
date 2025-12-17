export function highlightPage() {
    return `
<div class="navbar">
        <div class="options">
          <div class="group-btn">
        <img src="static/group 1.png" alt="Menu">
</div>
            </button>
        </div>
        <div id="title-header">
            <h2>Insight</h2>
        </div>
    </div>


    <div class="highlight-choice">
    <button>
    <h3>Statistics</h3> 
</button>

  <button>
    <h3>Savings Plan</h3>
</button>
</div>

<div class="highlight-plan">
<div class="highlight-plan-title">
<h2>+ New Plan</h2>
<p>Enter the parameters of the month: </p>
</div>


<form>
<input type="number" placeholder="Fixed income" />
<input type="number" placeholder="Fixed costs" />

<div class="procent-btn">
<button>
<h4>
5% 
</h4>
</button>

<button>
<h4>
10%
</h4>
</button>

<button>
<h4>
15%
</h4>
</button>

<button>
<h4>
25%
</h4>
</button>

<button>
<h4>
30%
</h4>
</button>
</div>

</form>

<div class="save-button">
<button>
<h3>Save</h3>
</button>
</div>
     

    `
}