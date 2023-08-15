const formatCurrency = (number, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    })
  
    return formatter.format(number);
}


const formatRating = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  } else {
    return number.toString();
  }
}

function countLikesAndDowns(likes, downs) {
  const likeCount = likes.length;
  const downCount = downs.length;

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    } else {
      return count.toString();
    }
  }

  return {
    likes: {
      count: likeCount,
      formattedCount: formatCount(likeCount)
    },
    downs: {
      count: downCount,
      formattedCount: formatCount(downCount)
    }
  }

}


const getInitials = (fName, lName) => {
  const firstIni = fName ? fName.charAt(0) : ''
  const lastIni = lName ? lName.charAt(0) : ''

  return `${firstIni}${lastIni}`
}

function randomColor() {
  const minComponentValue = 30
  const maxComponentValue = 255;
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * (maxComponentValue - minComponentValue + 1)) + minComponentValue
    color += letters[randomValue % 16]
  }

  return color;
}


function shortenText(text, maxLength) {
  if (text.length <= maxLength) {
    return text
  }
  const shortened = text.substring(0, maxLength - 3) + '...'
  return shortened
}

function oppositeColor(hexColor) {
  hexColor = hexColor.replace('#', '');

  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);

  const oppositeR = 255 - r;
  const oppositeG = 255 - g;
  const oppositeB = 255 - b;

  const oppositeHex = `#${oppositeR.toString(16).padStart(2, '0')}${oppositeG.toString(16).padStart(2, '0')}${oppositeB.toString(16).padStart(2, '0')}`;

  return oppositeHex;
}

const toDate = (dateString) => {
  const dateObject = new Date(dateString)

  if (isNaN(dateObject.getTime())) {
    return null
  }

  return dateObject
}

export { formatCurrency, formatRating, toDate, countLikesAndDowns, getInitials, shortenText, randomColor, oppositeColor }

