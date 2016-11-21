export  class BigbangPackage{
    public static PACKAGE = {
       INTERMEDIATE:0,
       INTERMEDIATE_ADVANCED:1,
       ADVANCED:2,
       SOLO:3
    }

    public static PACKAGE_NAMES:Array<string> = [
        "Full Pass - Intermediate",
        "Full Pass - Intermediate Advanced",
        "Full Pass - Advanced",
        "Full Pass - Solo Authentic Jazz"
    ]

    

    public static find(key:string){
        let key_value = {
            "Full Pass - Intermediate":0,
            "Full Pass - Intermediate Advanced":1,
            "Full Pass - Advanced":2,
            "Full Pass - Solo Authentic Jazz":3
        }
        return key_value[key];
    }

}

export class BusPackage{
    public static PACKAGE = {
       BKK2SAMPRAN:0,
       SAMPRAN2BKK:1,
       ROUNDTRIP:2,
       NONE:-1
    }

    public static PACKAGE_NAMES = [
        "BKK to SAMPRAN",
        "SAMPRAN to BKK",
        "ROUNDTRIP"
    ]

    public static find(key:string){
        let key_value = {
            "None":-1,
            "From Bangkok to Sampran Riverside":0,
            "From Sampran Riverside to Bangkok":1,
            "Round Trip":2   
        }
        return key_value[key];
    }
    

}

export class JackAndJill {
    public static PACKAGE_NAMES = [
        "Jack",
        "Jill",
    ]
    public static find(key:string){
        let key_value = {
            "None":-1,
            "I'm Jack":0,
            "I'm Jill":1
        }
        return key_value[key];
    }   
}

export class AdditionalWorkshop {
    public static PACKAGE_NAMES = [
        "1 workshop",
        "2 workshop"
    ]
    public static find(key:string){
        let key_value = {
            "None":-1,
            "One workshop ( 70 Minutes)":0,
            "Two workshop ( 70x2 Minutes )":1
        }
        return key_value[key];
    }   
}