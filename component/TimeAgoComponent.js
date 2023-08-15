// import React from 'react'
// import { Text } from 'react-native'
// import moment from 'moment'

// const TimeAgoComponent = (dateString, color) => {
  // const date = moment(dateString)
  // const timeAgo = date.fromNow()

//   return <Text style={{fontFamily: 'SemiBold', fontSize: 11, color: color}}>Posted: {dateString}</Text>
// };

// export default TimeAgoComponent;

import React from 'react';
import { Text } from 'react-native';
import { parseISO, format, formatDistanceToNow } from 'date-fns'

const TimeAgoComponent = ( date ) => {
  const parsedDate = parseISO(date)
  const timeAgo = formatDistanceToNow(parsedDate, { addSuffix: true })
  return timeAgo
}

export default TimeAgoComponent;