import * as fs from 'fs';

class GRIB2File {
  private _filePath: string;
  private _fileData: Buffer = Buffer.alloc(0);
  private _indicatorSection: unknown;
  private _sections: unknown[] = [];

  constructor(filePath: string) {
    this._filePath = filePath;
  }

  public async open(): Promise<void> {
    this._fileData = await fs.promises.readFile(this._filePath);
  }
}

export default GRIB2File;
