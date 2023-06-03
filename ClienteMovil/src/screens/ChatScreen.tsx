// React
import React, { useState } from "react";

// Components
import { View, KeyboardAvoidingView, Platform } from "react-native";
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbar,
} from "react-native-gifted-chat";

// Estilos
import styles from "../styles/styles";

const ChatScreen: React.FC = () => {
  const { colors } = styles();

  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSend = (newMessages: IMessage[]) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  const renderMessage = (props: any) => {
    return (
      <View style={{ margin: 15 }}>
        <Bubble
          {...props}
          textStyle={{
            right: {
              color: colors.text,
            },
            left: {
              color: colors.text,
            },
          }}
          timeTextStyle={{
            right: {
              color: colors.text,
            },
            left: {
              color: colors.text,
            },
          }}
          wrapperStyle={{
            right: {
              backgroundColor: colors.card,
            },
            left: {
              backgroundColor: colors.loader,
            },
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
        renderMessage={renderMessage}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

export default ChatScreen;
