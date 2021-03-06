import Vue from "vue";
import { ChannelNameWithParams } from "actioncable";
import { ChannelOptions } from "./options";

declare module 'vue/types/vue' {
  interface Vue {
    $cable: {
      subscribe: (subscription: string | ChannelNameWithParams, name?: string) => void;
      perform: ({channel: string, action: string, data: {}})
      unsubscribe: (channelName: string) => void;
      connected: boolean;
      disconnected: boolean;
    };
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    channels?: ChannelOptions<V>
  }
}
