import { getTotalOfArrayObject } from "./getTotalOfData"


export const getTotalOfCategory = (cat) => {
    let total = 0
    for (const _ of cat) {
        total += getTotalOfArrayObject(_.data)
    }
    return total.toFixed(2)

}


// export const totalRev = getTotalOfArrayObject(revenus)
// export const totalInv = getTotalOfCategory(investissements)
// export const totalDep = getTotalOfCategory(depences)


export const tauxEpargne = (revenus, investissements) => {
    const totalRev = getTotalOfArrayObject(revenus)
    const totalInv = getTotalOfCategory(investissements)
    return ((totalInv / totalRev) * 100).toFixed(2) + '%'
}

export const tauxEpargnePossible = (revenus, depences) => {
    const totalRev = getTotalOfArrayObject(revenus)
    const totalDep = getTotalOfCategory(depences)
    return (
        ((totalRev - totalDep) / totalRev
        ) * 100).toFixed(2) + '%'
}

export const rest = (revenus, investissements, depences) => {
    const r = (revenus - investissements - depences).toFixed(2)
    if (r < 0) {
        return `vous dépassez votre budget de ${r} M A D`
    }
    else if (r > 0) {
        return `il vous reste ${r} M A D  disponible`
    }
    else {
        return ''
    }
}