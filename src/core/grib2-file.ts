import * as fs from 'fs';

class GRIB2File {
  private _filePath: string;
  private _fileData: Buffer = Buffer.alloc(0);
  private _indicatorSection: any;
  private _sections: any[] = [];

  constructor(filePath: string) {
    this._filePath = filePath;
  }
}
