import axios from 'axios';

export abstract class BaseFetcherService {
  abstract fetchData(url: string): Promise<any>;

  protected async get(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
  }

}
