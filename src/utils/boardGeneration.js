const resourcesToArray = (resourceCounts) => {
  const result = []

  for (const resource in resourceCounts) {
    const count = resourceCounts[resource]
    for (let i = 0; i < count; i++) {
      result.push(resource)
    }
  }

  return result
}

const classicData = {
  tilesPerRow: [3, 4, 5, 4, 3],
  numColumns: 5,
  resources: resourcesToArray({
    wood: 4,
    sheep: 4,
    wheat: 4,
    stone: 3,
    brick: 3,
    desert: 1,
  }),
  numbers: resourcesToArray({
    2: 1,
    3: 2,
    4: 2,
    5: 2,
    6: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 1,
  }),
}

const expansionData = {
  tilesPerRow: [3, 4, 5, 6, 5, 4, 3],
  numColumns: 7,
  resources: resourcesToArray({
    wood: 6,
    sheep: 6,
    wheat: 6,
    stone: 5,
    brick: 5,
    desert: 2,
  }),
  numbers: resourcesToArray({
    2: 2,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    8: 3,
    9: 3,
    10: 3,
    11: 3,
    12: 2,
  }),
}

const shuffle = (array) => {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
}

export const generateBoard = (isExpansion) => {
  let data = JSON.parse(
    JSON.stringify(isExpansion ? expansionData : classicData)
  )
  shuffle(data.resources)
  shuffle(data.numbers)
  return Array.from({ length: data.numColumns }, (_, i) =>
    Array.from({ length: data.tilesPerRow[i] }, (_, j) => ({
      number:
        data.resources.at(-1) !== 'desert' ? data.numbers.pop() : undefined,
      resource: data.resources.pop(),
    }))
  )
}
