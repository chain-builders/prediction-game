/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
} from "../common";

export interface EventsInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "PredictionSubmitted"
      | "QuestionCreated"
      | "QuestionResolved"
      | "RewardDistributed"
      | "StreakReward"
      | "UsernameSet"
  ): EventFragment;
}

export namespace PredictionSubmittedEvent {
  export type InputTuple = [
    player: AddressLike,
    questionId: BigNumberish,
    answer: BigNumberish,
    stakeAmount: BigNumberish
  ];
  export type OutputTuple = [
    player: string,
    questionId: bigint,
    answer: bigint,
    stakeAmount: bigint
  ];
  export interface OutputObject {
    player: string;
    questionId: bigint;
    answer: bigint;
    stakeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuestionCreatedEvent {
  export type InputTuple = [
    questionId: BigNumberish,
    text: string,
    duration: BigNumberish,
    resolutionWindow: BigNumberish,
    timeLimit: BigNumberish
  ];
  export type OutputTuple = [
    questionId: bigint,
    text: string,
    duration: bigint,
    resolutionWindow: bigint,
    timeLimit: bigint
  ];
  export interface OutputObject {
    questionId: bigint;
    text: string;
    duration: bigint;
    resolutionWindow: bigint;
    timeLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuestionResolvedEvent {
  export type InputTuple = [
    questionId: BigNumberish,
    correctAnswer: BigNumberish
  ];
  export type OutputTuple = [questionId: bigint, correctAnswer: bigint];
  export interface OutputObject {
    questionId: bigint;
    correctAnswer: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardDistributedEvent {
  export type InputTuple = [player: AddressLike, rewardAmount: BigNumberish];
  export type OutputTuple = [player: string, rewardAmount: bigint];
  export interface OutputObject {
    player: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StreakRewardEvent {
  export type InputTuple = [
    player: AddressLike,
    streakLength: BigNumberish,
    rewardPoints: BigNumberish
  ];
  export type OutputTuple = [
    player: string,
    streakLength: bigint,
    rewardPoints: bigint
  ];
  export interface OutputObject {
    player: string;
    streakLength: bigint;
    rewardPoints: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UsernameSetEvent {
  export type InputTuple = [player: AddressLike, username: string];
  export type OutputTuple = [player: string, username: string];
  export interface OutputObject {
    player: string;
    username: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Events extends BaseContract {
  connect(runner?: ContractRunner | null): Events;
  waitForDeployment(): Promise<this>;

  interface: EventsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "PredictionSubmitted"
  ): TypedContractEvent<
    PredictionSubmittedEvent.InputTuple,
    PredictionSubmittedEvent.OutputTuple,
    PredictionSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "QuestionCreated"
  ): TypedContractEvent<
    QuestionCreatedEvent.InputTuple,
    QuestionCreatedEvent.OutputTuple,
    QuestionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "QuestionResolved"
  ): TypedContractEvent<
    QuestionResolvedEvent.InputTuple,
    QuestionResolvedEvent.OutputTuple,
    QuestionResolvedEvent.OutputObject
  >;
  getEvent(
    key: "RewardDistributed"
  ): TypedContractEvent<
    RewardDistributedEvent.InputTuple,
    RewardDistributedEvent.OutputTuple,
    RewardDistributedEvent.OutputObject
  >;
  getEvent(
    key: "StreakReward"
  ): TypedContractEvent<
    StreakRewardEvent.InputTuple,
    StreakRewardEvent.OutputTuple,
    StreakRewardEvent.OutputObject
  >;
  getEvent(
    key: "UsernameSet"
  ): TypedContractEvent<
    UsernameSetEvent.InputTuple,
    UsernameSetEvent.OutputTuple,
    UsernameSetEvent.OutputObject
  >;

  filters: {
    "PredictionSubmitted(address,uint256,uint256,uint256)": TypedContractEvent<
      PredictionSubmittedEvent.InputTuple,
      PredictionSubmittedEvent.OutputTuple,
      PredictionSubmittedEvent.OutputObject
    >;
    PredictionSubmitted: TypedContractEvent<
      PredictionSubmittedEvent.InputTuple,
      PredictionSubmittedEvent.OutputTuple,
      PredictionSubmittedEvent.OutputObject
    >;

    "QuestionCreated(uint256,string,uint256,uint256,uint256)": TypedContractEvent<
      QuestionCreatedEvent.InputTuple,
      QuestionCreatedEvent.OutputTuple,
      QuestionCreatedEvent.OutputObject
    >;
    QuestionCreated: TypedContractEvent<
      QuestionCreatedEvent.InputTuple,
      QuestionCreatedEvent.OutputTuple,
      QuestionCreatedEvent.OutputObject
    >;

    "QuestionResolved(uint256,uint256)": TypedContractEvent<
      QuestionResolvedEvent.InputTuple,
      QuestionResolvedEvent.OutputTuple,
      QuestionResolvedEvent.OutputObject
    >;
    QuestionResolved: TypedContractEvent<
      QuestionResolvedEvent.InputTuple,
      QuestionResolvedEvent.OutputTuple,
      QuestionResolvedEvent.OutputObject
    >;

    "RewardDistributed(address,uint256)": TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;
    RewardDistributed: TypedContractEvent<
      RewardDistributedEvent.InputTuple,
      RewardDistributedEvent.OutputTuple,
      RewardDistributedEvent.OutputObject
    >;

    "StreakReward(address,uint256,uint256)": TypedContractEvent<
      StreakRewardEvent.InputTuple,
      StreakRewardEvent.OutputTuple,
      StreakRewardEvent.OutputObject
    >;
    StreakReward: TypedContractEvent<
      StreakRewardEvent.InputTuple,
      StreakRewardEvent.OutputTuple,
      StreakRewardEvent.OutputObject
    >;

    "UsernameSet(address,string)": TypedContractEvent<
      UsernameSetEvent.InputTuple,
      UsernameSetEvent.OutputTuple,
      UsernameSetEvent.OutputObject
    >;
    UsernameSet: TypedContractEvent<
      UsernameSetEvent.InputTuple,
      UsernameSetEvent.OutputTuple,
      UsernameSetEvent.OutputObject
    >;
  };
}
