export class QQlevelConfig {
  maxLevelLimit: number = 255;
  minLevelLimit: number = 0;
  icon: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: './assets/crown.svg',
    sun: './assets/sun.svg',
    moon: './assets/moon.svg',
    star: './assets/star.svg',
  };
  iconString: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  } = {
    crown: '👑',
    sun: '🌞',
    moon: '🌙',
    star: '⭐',
  };
  iconLevel: {
    crown: number;
    sun: number;
    moon: number;
    star: number;    
  } = {
    crown: 64,
    sun: 16,
    moon: 4,
    star: 1,
  };
  iconStyle: string = `width: 1em;height: 1em;`;
  iconWrapStyle: string = `display: flex;align-items: center;font-szie: 12px;`;
};

export interface Level {
  level: number;
  crown: number;
  sun: number;
  moon: number;
  star: number;
}

export class Utils {
  public static inRange(x: number, range:{
    max: number, min: number,
  }): boolean {
    return x >= range.min && x <= range.max;
  }
}

export class QQlevel {

  private config: QQlevelConfig = new QQlevelConfig();
  private level: Level = {
    level: null,
    crown: null,
    sun: null,
    moon: null,
    star: null,
  };

  public constructor(level?: number, config?: QQlevelConfig) {
    if (config) {
      this.setConfig(config);
    }
    if (level) {
      this.setLevel(level);
      this.calcLevel();
    }
  }

  public getConfig(): QQlevelConfig {
    return this.config;
  }

  public setConfig(config: QQlevelConfig): void {
    this.config = config;
  }
  
  public setLevelLimit(range: {
    max: number,
    min: number,
  }): void {
    if (range.max > range.min 
      && range.max >= this.config.iconLevel.crown
      && range.min <= this.config.iconLevel.star
      ) {
        this.config.maxLevelLimit = range.max;
        this.config.minLevelLimit = range.min;
    } else {
      throw Error('Illegal Range');
    }
  }

  public setIconLevel(iconLevel: {
    crown: number;
    sun: number;
    moon: number;
    star: number;    
  }): void {
    if (
      iconLevel.crown > iconLevel.sun
      && iconLevel.sun > iconLevel.moon
      && iconLevel.moon > iconLevel.star
      && iconLevel.crown <= this.config.maxLevelLimit
      && iconLevel.star >= this.config.minLevelLimit
      ) {
        this.config.iconLevel = iconLevel;
    } else {
      throw Error('Illegal IconLevel');
    }
  }

  public setIconString(iconString: {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  }): void {
    this.config.iconString = iconString;
  }

  public setIcon(icon:  {
    crown: string;
    sun: string;
    moon: string;
    star: string;
  }): void {
    this.config.icon = icon;
  }

  public setIconStyle(style: string): void  {
    this.config.iconStyle = style;
  }

  public addIconStyle(style: string): void  {
    this.config.iconStyle = `${this.config.iconStyle}${style}`;
  }

  public setIconWrapStyle(style: string): void  {
    this.config.iconWrapStyle = style;
  }

  public addIconWrapStyle(style: string): void  {
    this.config.iconWrapStyle = `${this.config.iconWrapStyle}${style}`;
  }

  public setLevel(level: number): void  {
    const { maxLevelLimit, minLevelLimit } = this.config;
    if (Utils.inRange(level, {
      max: maxLevelLimit,
      min: minLevelLimit,
    })) {
      this.level.level = level;
    } else if (level > maxLevelLimit) {
      this.level.level = level;
    } else {
      this.level.level = minLevelLimit;
    }
  }

  public getLevel(): Level {
    return this.calcLevel();
  }

  public calcLevel(): Level{
    if (this.level.level != 0 && !this.level.level) {
      throw Error("Please set a number to level first by constructor or setLevel()");
    }
    this.level = this.coreCalc(this.level.level);
    return this.level;
  }

  private coreCalc(level: number) : Level {
    let cCount: number = 0;
    let sCount: number = 0;
    let mCount: number = 0;
    let stCount: number = 0;
    let restC: number = 0;
    let restS: number = 0;
    let restM: number = 0;
    const { maxLevelLimit, iconLevel } = this.config;
    if(level > maxLevelLimit){
      cCount = 4;
    } else if( level >= iconLevel.crown) {
      cCount = Math.floor( level / iconLevel.crown);
      restC =  level % iconLevel.crown;
      if (restC >= iconLevel.sun) {
        sCount = Math.floor(restC / iconLevel.sun);
        restS = restC % iconLevel.sun;
        if(restS >= iconLevel.moon) {
          mCount = Math.floor(restS / iconLevel.moon);
          restM = restS % iconLevel.moon;
          if (restM >= iconLevel.star) {
            stCount = restM;
          }
        } else {
          stCount = restS;
        }
      } else {
        if(restC >= iconLevel.moon){
          mCount = Math.floor(restC / iconLevel.moon);
          restM = restC % iconLevel.moon;
          if (restM >= iconLevel.star) {
            stCount = restM;
          }
        } else {
          stCount = restC;
        }
      }
    } else if(level >= iconLevel.sun) {
      sCount = Math.floor(level / iconLevel.sun);
      restS = level % iconLevel.sun;
      if(restS >= iconLevel.moon){
        mCount = Math.floor(restS / iconLevel.moon);
        restM = restS % iconLevel.moon;
        if (restM >= iconLevel.star) {
          stCount = restM;
        }
      } else {
        stCount = restS;
      }
    } else if(level >= iconLevel.moon){
      mCount = Math.floor( level / iconLevel.moon);
      restM = level % iconLevel.moon;
      if (restM >= iconLevel.star) {
        stCount = restM;
      }
    } else if(level >= iconLevel.star){
      stCount = level;
    }
    return {
      level: level,
      crown: cCount,
      sun: sCount,
      moon: mCount,
      star: stCount,
    };
  }

  public outputLevelHTML(): string {
    if (this.level.level != 0 && !this.level.level) {
      throw Error("Please set a number to level first by constructor or setLevel()");
    }
    let { crown, sun, moon, star } = this.level;
    if (!crown || !sun || !moon || !star) {
      const reTry = this.getLevel();
      crown = reTry.crown;
      sun = reTry.sun;
      moon = reTry.moon;
      star = reTry.star;
    }
    const { icon, iconStyle, iconWrapStyle } = this.config;
    let crowStr: string = '';
    let sunStr: string = '';
    let moonStr: string = '';
    let starStr: string = '';
    let warpBegin: string = `<div style='${iconWrapStyle}'>`;
    let warpEnd: string = '</div>';
    for (let i = 0; i < crown; i++) {
      crowStr += `<img src='${icon.crown}' style='${iconStyle}'>`;
    }
    for (let i = 0; i < sun; i++) {
      sunStr += `<img src='${icon.sun}' style='${iconStyle}'>`;
    }
    for (let i = 0; i < moon; i++) {
      moonStr += `<img src='${icon.moon}' style='${iconStyle}'>`;
    }
    for (let i = 0; i < star; i++) {
      starStr += `<img src='${icon.star}' style='${iconStyle}'>`;
    }
    return `${warpBegin}${crowStr}${sunStr}${moonStr}${starStr}${warpEnd}`;
  }

  public outputLevelString(): string {
    if (this.level.level != 0 && !this.level.level) {
      throw Error("Please set a number to level first by constructor or setLevel()");
    }
    let { crown, sun, moon, star } = this.level;
    if (!crown || !sun || !moon || !star) {
      const reTry = this.getLevel();
      crown = reTry.crown;
      sun = reTry.sun;
      moon = reTry.moon;
      star = reTry.star;
    }
    const { iconString } = this.config;
    let crowStr: string = '';
    let sunStr: string = '';
    let moonStr: string = '';
    let starStr: string = '';
    for (let i = 0; i < crown; i++) {
      crowStr += `${iconString.crown}`;
    }
    for (let i = 0; i < sun; i++) {
      sunStr += `${iconString.sun}`;
    }
    for (let i = 0; i < moon; i++) {
      moonStr += `${iconString.moon}`;
    }
    for (let i = 0; i < star; i++) {
      starStr += `${iconString.star}`;
    }
    return `${crowStr}${sunStr}${moonStr}${starStr}`;
  }
}

export default QQlevel;