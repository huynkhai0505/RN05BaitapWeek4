import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../baitap/styles/BaiTapStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faEllipsis, faPenClip } from '@fortawesome/free-solid-svg-icons'

dataAvatar = [
    {
        name: 'Sahara',
        image: require('../../asset/images/image1.jpeg'),
    },
    {
        name: 'Sophia',
        image: require('../../asset/images/image2.jpeg'),
    },
    {
        name: 'Hana',
        image: require('../../asset/images/image3.jpeg'),
    },
    {
        name: 'Naul',
        image: require('../../asset/images/image4.jpeg'),
    },
    {
        name: 'Kimihana',
        image: require('../../asset/images/image5.jpeg'),
    },
    {
        name: 'Yoko',
        image: require('../../asset/images/image6.jpeg'),
    },
    {
        name: 'Su',
        image: require('../../asset/images/image7.jpeg'),
    },
    {
        name: 'Finnia',
        image: require('../../asset/images/image8.jpeg'),
    },
    {
        name: 'Subana',
        image: require('../../asset/images/image9.jpeg'),
    },
    {
        name: 'Corohe',
        image: require('../../asset/images/image10.jpeg'),
    }
]

const dataFeeds = [
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sahara",
        image: require('../../asset/images/image1.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Sophia",
        image: require('../../asset/images/image2.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "3 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Hana",
        image: require('../../asset/images/image3.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "5 minutes"
    
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Naul",
        image: require('../../asset/images/image4.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10 minutes"
    },
    {
        title: "Lorem Ipsum is simply dummy text",
        name: "Kimihana",
        image: require('../../asset/images/image5.jpeg'),
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "1 minutes"
    }
]


export default class BaiTap extends Component {
  
  renderHeader = () => {
      return (
          <View style={styles.container_header}>
            <View style={styles.header}>
                <FontAwesomeIcon icon={faCamera}/>
                <Text style={styles.header_text}>Feed</Text>
                <FontAwesomeIcon icon={faPenClip}/>
            </View>
          </View>
      );
  }

  renderHinh = () => {

  }

  renderAvatars = () => {
      return (
        <View style={styles.container_avatar}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    dataAvatar.map((data, index) => (
                        <View style={styles.container_avatar__sub}>
                            <Image style={styles.container_avatar__image} source={data.image}/>
                            <Text>{data.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
      );
  }

  renderFeeds = () => {
      return (
        <View style={styles.container_feed}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    dataFeeds.map((data, index) => (
                        <View style={styles.container_border}>
                            <View style={styles.container_feed__topView}>
                                <Image style={styles.container_avatar__image} source={data.image}/>
                                <View>
                                    <Text style={styles.container_feed__topView__title}>{data.title}</Text>
                                    <View style={styles.container_feed__topView__name}>
                                        <Text style={styles.text_color}>{data.name}</Text>
                                        <Text style={[styles.text_color, styles.margin_letf_60]}>{data.time}</Text>
                                    </View>
                                </View>
                                <FontAwesomeIcon style={styles.container_feed__topView__icon} icon={faEllipsis}/>
                            </View>
                            <View style={styles.container_feed__midView}><Text>{data.content}</Text></View>
                            <View style={styles.container_feed__bottomView}>
                                <Image style={styles.container_react} source={require('../../asset/heart.png')}/>
                                <Text style={styles.margin_Left_5}>2</Text>
                                <Image style={[styles.container_react, styles.margin_Left_10]} source={require('../../asset/comment.png')}/>
                                <Text style={styles.margin_Left_5}>4</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
      );
  }

  render() {
    return (
      <View style={styles.root}>
          {this.renderHeader()}
          {this.renderAvatars()}
          {this.renderFeeds()}
      </View>
    )
  }
}
