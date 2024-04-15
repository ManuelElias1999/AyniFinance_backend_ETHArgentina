import {LensClient, development, isRelayerResult} from "@lens-protocol/client";
import {
  post
} from '@loopback/rest';

const lensClient = new LensClient({
  environment: development
});

export class LensController {
  constructor(
  ) { }

  @post('/lens')
  async myEndpoint(): Promise<string> {
    try {
      // lensClient is an authenticated instance of LensClient

      const profileCreateResult = await lensClient.profile.create({
        handle: 'aynifinance',
        // other request args
      });
      // profileCreateResult is a Result object
      const profileCreateResultValue = profileCreateResult.unwrap();

      if (!isRelayerResult(profileCreateResultValue)) {
        console.log(`Something went wrong`, profileCreateResultValue);
        return 'Something went wrong';
      }

      console.log(
        `Transaction was successfuly broadcasted with txId ${profileCreateResultValue.txId}`
      );

      return 'Hello, world!';
    } catch (error) {
      return error;
    }
  }

}
