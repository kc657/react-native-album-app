import React, {Component} from 'react'
import {Text , View , Image} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image} = album
  const {thumbnailStyle, headerContainerStyle, thumbnailContainerStyle, headerTextStyle, albumImageStyle} = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{uri:thumbnail_image}}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{uri:image}}
          style={albumImageStyle}
        />
      </CardSection>
    </Card>
  )
}

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail
