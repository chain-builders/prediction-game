/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "PredictionGame",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PredictionGame__factory>;
    getContractFactory(
      name: "GuessGame",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GuessGame__factory>;
    getContractFactory(
      name: "Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>;
    getContractFactory(
      name: "Events",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Events__factory>;

    getContractAt(
      name: "PredictionGame",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PredictionGame>;
    getContractAt(
      name: "GuessGame",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GuessGame>;
    getContractAt(
      name: "Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Errors>;
    getContractAt(
      name: "Events",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Events>;

    deployContract(
      name: "PredictionGame",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PredictionGame>;
    deployContract(
      name: "GuessGame",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GuessGame>;
    deployContract(
      name: "Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Errors>;
    deployContract(
      name: "Events",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Events>;

    deployContract(
      name: "PredictionGame",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PredictionGame>;
    deployContract(
      name: "GuessGame",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GuessGame>;
    deployContract(
      name: "Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Errors>;
    deployContract(
      name: "Events",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Events>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
