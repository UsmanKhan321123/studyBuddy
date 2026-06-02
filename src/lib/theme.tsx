
import { Dimensions } from "react-native";
import type { DeepPartial, Theme } from "stream-chat-expo";

const { width } = Dimensions.get("window");
const vw = (percent: number) => (width * percent) / 100;

// these colors are matching tailwind.config.js
export const COLORS = {
  primary: "#6C5CE7",
  primaryDark: "#5A4BD1",
  primaryLight: "#A29BFE",
  primaryTransparent: "rgba(108, 92, 231, 0.5)",

  background: "#0F0E17",
  surface: "#1A1A2E",
  surfaceDark: "#0F0E17",
  surfaceLight: "#16213E",

  text: "#FFFFFE",
  textMuted: "#A7A9BE",
  textSubtle: "#72757E",

  border: "#232946",
  borderLight: "#2E3354",

  success: "#00B894",
  warning: "#FDCB6E",
  danger: "#FF6B6B",

  active: "#6C5CE7",

  outgoingBubble: "#3D3580",
  incomingBubble: "#1A1A2E",
  chatBackground: "#0F0E17",

  accent: "#FF6B6B",
  accentSecondary: "#00B894",
};

 export const studyBuddyTheme: DeepPartial<Theme> = {
  audioAttachment: {
    container: {
      backgroundColor: COLORS.surfaceDark,
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      width: 300,
      overflow: "hidden",
    },
    leftContainer: {
      marginRight: 8,
    },
    playPauseButton: {
      backgroundColor: COLORS.primary,
      borderRadius: 20,
    },
    progressControlContainer: {
      flex: 1,
    },
    progressDurationText: {
      color: COLORS.textMuted,
      fontSize: 12,
    },
    rightContainer: {
      marginLeft: 8,
    },
    speedChangeButton: {
      backgroundColor: COLORS.surface,
      borderRadius: 4,
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    speedChangeButtonText: {
      color: COLORS.text,
      fontSize: 12,
    },
  },
  imageGallery: {
    backgroundColor: COLORS.background,
    slide: {
      backgroundColor: COLORS.background,
    },
    grid: {
      contentContainer: {
        backgroundColor: COLORS.background,
      },
      handle: {
        backgroundColor: COLORS.background,
      },
      handleText: {
        color: COLORS.textMuted,
      },
    },
    header: {
      container: {
        backgroundColor: COLORS.surface,
      },
      usernameText: {
        color: COLORS.text,
      },
      dateText: {
        color: COLORS.textMuted,
      },
    },
    footer: {
      container: {
        backgroundColor: COLORS.surface,
      },
      imageCountText: {
        color: COLORS.textMuted,
      },
    },
  },
  channelListView: {
    flatList: {
      backgroundColor: COLORS.background,
    },
    flatListContent: {},
  },
  loadingIndicator: {
    container: {
      backgroundColor: COLORS.background,
    },
    loadingText: {
      color: COLORS.textMuted,
    },
  },
  channelListFooterLoadingIndicator: {
    container: {
      backgroundColor: COLORS.background,
    },
  },
  channelListLoadingIndicator: {
    container: {
      backgroundColor: COLORS.background,
    },
  },
  channelListSkeleton: {
    container: { backgroundColor: COLORS.background },
    content: { backgroundColor: COLORS.surfaceLight },
    title: { backgroundColor: COLORS.surfaceLight },
    subtitle: { backgroundColor: COLORS.surfaceLight },
    avatar: { backgroundColor: COLORS.surfaceLight },
    badge: { backgroundColor: COLORS.primary },
  },
  channelPreview: {
    container: {
      backgroundColor: COLORS.background,
    },
    contentContainer: {
      backgroundColor: COLORS.background,
    },
    title: {
      color: COLORS.text,
      fontSize: 16,
      fontWeight: "600",
    },
    unreadContainer: {
      backgroundColor: COLORS.primary,
    },
  },
  messageList: {
    scrollToBottomButton: {
      container: {
        backgroundColor: COLORS.surface,
        borderColor: COLORS.border,
      },
    },
    container: {
      backgroundColor: COLORS.surfaceLight,
    },
    contentContainer: {
      backgroundColor: COLORS.surfaceLight,
    },

    inlineUnreadIndicator: {
      container: {
        backgroundColor: COLORS.primary,
      },
      text: {
        color: COLORS.text,
      },
    },
    listContainer: {
      backgroundColor: COLORS.surfaceLight,
    },
  },

  messageComposer: {
    container: {
      backgroundColor: COLORS.surface,
      borderTopColor: COLORS.border,
      borderTopWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    inputBox: {
      color: COLORS.text,
      backgroundColor: COLORS.surfaceDark,
      borderRadius: 8,
      paddingHorizontal: 12,
    },
    inputBoxContainer: {
      backgroundColor: COLORS.surfaceDark,
      borderRadius: 8,
      borderWidth: 0,
    },
    suggestionsListContainer: {
      container: {
        backgroundColor: COLORS.surface,
      },
    },
    audioRecorder: {
      micIcon: {
        pathFill: COLORS.primary,
      },
      checkContainer: {
        backgroundColor: COLORS.primary,
      },
      deleteContainer: {
        backgroundColor: COLORS.danger,
      },
      deleteIcon: {
        pathFill: COLORS.text,
      },
      slideToCancelContainer: {
        backgroundColor: COLORS.surface,
      },
    },
    audioRecordingInProgress: {
      container: {
        backgroundColor: COLORS.surface,
      },
      durationText: {
        color: COLORS.text,
      },
    },
    audioRecordingLockIndicator: {
      container: {
        backgroundColor: COLORS.surface,
      },
      lockIcon: {
        pathFill: COLORS.primary,
      },
      arrowUpIcon: {
        pathFill: COLORS.textMuted,
      },
    },
    audioRecordingPreview: {
      container: {
        backgroundColor: COLORS.surface,
      },
      currentTime: {
        color: COLORS.text,
      },
      progressBar: {
        backgroundColor: COLORS.primary,
      },
    },
    audioRecordingWaveform: {
      container: {
        backgroundColor: COLORS.surface,
      },
      waveform: {
        backgroundColor: COLORS.primary,
      },
    },
  },
  messageItemView: {
    authorWrapper: {
      container: {
        marginRight: 8,
      },
    },
    file: {
      container: {
        backgroundColor: COLORS.surfaceDark,
        borderColor: COLORS.border,
      },
      fileSize: { color: COLORS.textMuted },
      title: { color: COLORS.text, fontWeight: "normal" },
    },
    pinnedHeader: { container: { display: "none" } },
    content: {
      textContainer: {
        maxWidth: vw(80),
        paddingHorizontal: 12,
      },
      replyBorder: {
        borderColor: COLORS.primary,
      },
      containerInner: {
        backgroundColor: COLORS.incomingBubble,
        borderColor: COLORS.incomingBubble,
        borderRadius: 8,
      },
      markdown: {
        em: {
          color: COLORS.textMuted,
        },
        text: {
          color: COLORS.text,
        },
      },
      metaText: {
        color: COLORS.textSubtle,
      },
    },
    deleted: {
      containerInner: {
        backgroundColor: COLORS.surfaceDark,
        borderColor: COLORS.surfaceDark,
      },
      deletedText: {
        color: COLORS.textMuted,
      },
    },

    giphy: {
      container: {
        margin: 4,
        borderRadius: 8,
      },
    },
    card: {
      container: {
        width: vw(80),
        backgroundColor: COLORS.surface,
        borderColor: COLORS.border,
      },
      cover: {
        marginHorizontal: 0,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      footer: {
        backgroundColor: COLORS.surfaceDark,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        padding: 12,
        title: {
          marginHorizontal: 4,
          marginBottom: 4,
          color: COLORS.text,
        },
        description: {
          marginHorizontal: 4,
          color: COLORS.textMuted,
        },
      },
    },
    replies: {
      container: {
        backgroundColor: COLORS.surface,
        borderRadius: 8,
      },
      messageRepliesText: {
        padding: 4,
        color: COLORS.primary,
      },
    },
    status: {
      timeIcon: {
        pathFill: COLORS.textSubtle,
      },
      checkAllIcon: {
        pathFill: COLORS.primary,
      },
      checkIcon: {
        pathFill: COLORS.textSubtle,
      },
    },
  },
  thread: {
    newThread: {
      backgroundGradientStart: COLORS.surfaceLight,
      backgroundGradientStop: COLORS.surfaceLight,
      text: {
        color: COLORS.textMuted,
      },
    },
  },
  reply: {
    container: {
      backgroundColor: COLORS.surfaceDark,
      borderColor: COLORS.border,
    },
    messagePreview: {
      container: {
        backgroundColor: COLORS.surfaceDark,
      },
      subtitle: {
        color: COLORS.textMuted,
      },
    },
  },
  typingIndicator: {
    container: {
      backgroundColor: COLORS.surfaceLight,
    },
    text: {
      color: COLORS.textMuted,
    },
  },
  poll: {
    button: {
      text: {
        color: COLORS.primary,
      },
    },
    message: {
      container: {
        backgroundColor: COLORS.incomingBubble,
        borderRadius: 8,
      },
      header: {
        title: {
          color: COLORS.primary,
        },
        subtitle: {
          color: COLORS.textMuted,
        },
      },
      option: {
        text: {
          color: COLORS.text,
        },
        progressBar: {
          backgroundColor: COLORS.border,
        },
        voteButtonContainer: {
          borderColor: COLORS.primary,
        },
      },
    },
  },
};
