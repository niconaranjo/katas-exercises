// return array of prices that are within budget
function search(budget, prices) {
    return prices.filter((price) => price <= budget).sort((a,b) => a-b).join(',')
}

const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();