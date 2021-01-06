let emojiBaseUrl = `../img`
const iconEmojiDelete = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAk1BMVEUAAADAwMC3t7e/v7/Gxsa/v7+/v7/AwMC/v7+/v7+/v7++vr7CwsK/v7+/v7+/v7++vr6/v7+/v7+/v7+/v7+/v7/AwMCbm5u/v7+/v7+/v7+/v7/AwMC/v7+/v7+/v7+/v7+/v7+/v7++vr7AwMC9vb2/v7+/v7/CwsLAwMDHx8fExMTIyMjLy8vJycnKysrPz8+3r5/kAAAAKHRSTlMA8Q39A/vcIwf34B0P1uNJIuzPjHFqFwVFmls4J761rMiFoVJ6XTNYKpTiKQAAAylJREFUeF7tmEl3ozAQhNt0ywYM3rfETuJMltEC2P//1w3IVg555olmHjfVlcMnAVUtFfgVFBQUFBQUFBREXAAR8BVnEUNZzF8YwTYdsZQ/Pcc8CsGmNEpyZMoqn/MYzxoFomIIhTDFujtjD3OlEFEyVENqzHUN1HUfx0QiKjliKJEVIorioxuF4LQ0AkW53mddf7Asmh5eNaLQeUfGLtUN4w8wtbaULlshiFZVw3gF7g8Jr4UQ5ZMfQkAvl5pRnWO+teYGhT53YMBbWTP0OAMCrqaJQjmLwKunhmGWkx4MiEZSyZEPQvDeMGRy7MOAbCTRCyHYFqqx+Rxi6KHIC7FhYrCW/gKCQSAuTBRWGwaDCSE4CmmNDtRhJhFxIS5M2o1uweQZmw7iC5N2o58O9EMhyDabjAdxYdJudIINytXiTiGY5tfrKuJBXJjo8a6FsUiMuIynQDfGuEqScgvEgLgwaTU6wVEJFEVDsYxCoOBBXJjI5LvdIOeyoaRTiGGaNowqZ7wuFybYYnT3vlJ928t9H3o2AeoOIdhUHqNbykzb9R/y6jfDDyH40g3jYo3uo6CUEh2jM4TgYE8mv4z+kJIWeFORToDn+FUhEI1/ohNMxtIy5NgyGJBspBDlMvKnYtzMV1SIxo6CYXeiZG69P8g3mbhvIqrGlQyIG1Xi8ukobYzb32UkOu93hrihi6i3QB5G48aD9aKl8B2vlPyAvYehZyc4WZqjMLMLFR5aKdHN5+kC4nvClGcA4Kdwe0ISbMs7g35yTB6B+swTs1wAtUCSpLBZcnt3lTBJTew1GXX+eGrVj69X5/OGkhu5Aeo54y+rGOjh489Py3drmn//z2nlBR5TPKcV5rnr7SEF9nvGuct3HW2uMVzxz8KifAcaDOICRhVboMEg7kiB5m/f+4nyQ34CRtmAGWAnLmD637V2I2Vn7I+8AXPiF0sHiWjyGDrf43W663WPv7wBdW8kqlXUp5Eonn9BfAGTRYxuZX7vVmJGSyQQTcJpiUxLS+QJGKW4fRfavovX3Clmc6f1mtlBXuSQHaSjLAdoU4fvhYdvuIOCgoKCgoL+AXU1fW2kbFGNAAAAAElFTkSuQmCC'
let albumArr = []
let emojiList = {
    "emoji": {
        "[大笑]": {
            file: "大笑.png"
        },
        "[可爱]": {
            file: "可爱.png"
        },
        "[喜欢]": {
            file: "喜欢.png"
        },
        "[嘘]": {
            file: "ok.png"
        },
        "[啊]": {
            file: "啊.png"
        },
        "[闭眼]": {
            file: "闭眼.png"
        },
        "[沉默]": {
            file: "沉默.png"
        },
        "[汗]": {
            file: "汗.png"
        },
        "[呲牙]": {
            file: "呲牙.png"
        },
        "[大哭]": {
            file: "大哭.png"
        },
        "[盯]": {
            file: "盯.png"
        },
        "[飞吻]": {
            file: "飞吻.png"
        },
        "[哈哈]": {
            file: "哈哈.png"
        },
        "[憨笑]": {
            file: "憨笑.png"
        },
        "[好的]": {
            file: "好的.png"
        },
        "[苦]": {
            file: "苦.png"
        },
        "[木]": {
            file: "木.png"
        },
        "[难过]": {
            file: "难过.png"
        },
        "[难受]": {
            file: "难受.png"
        },
        "[亲亲]": {
            file: "亲亲.png"
        },
        "[生气]": {
            file: "生气.png"
        },
        "[睡觉]": {
            file: "睡觉.png"
        },
        "[天使]": {
            file: "天使.png"
        },
        "[痛苦]": {
            file: "痛苦.png"
        },
        "[吐舌]": {
            file: "吐舌.png"
        },
        "[哇]": {
            file: "哇.png"
        },
        "[微笑]": {
            file: "微笑.png"
        },
        "[小可爱]": {
            file: "小可爱.png"
        },
        "[眼镜]": {
            file: "眼镜.png"
        },
        "[眨眼]": {
            file: "眨眼.png"
        },
       
    }
}
let emojiList1 = {
    "emoji": {
        "[大笑]": {
			name:"[大笑]",
            file: require('../img/大笑.png')
        },
        "[可爱]": {
			name:"[可爱]",
             file: require('../img/可爱.png')
        },
        "[喜欢]": {
			name:"[喜欢]",
            file: require('../img/喜欢.png')
        },
        "ok]": {
			name:"[ok]",
            file: require('../img/ok.png')
        },
        "[啊]": {
			name:"[啊]",
            file: require('../img/啊.png')
        },
        "[闭眼]": {
			name:"[闭眼]",
             file: require('../img/闭眼.png')
        },
        "[沉默]": {
			name:"[沉默]",
             file: require('../img/沉默.png')
        },
        "[汗]": {
			name:"[汗]",
             file: require('../img/汗.png')
        },
        "[呲牙]": {
			name:"[呲牙]",
            file: require('../img/呲牙.png')
        },
        "[大哭]": {
			name:"[大哭]",
            file: require('../img/大哭.png')
        },
        "[盯]": {
			name:"[盯]",
             file: require('../img/盯.png')
        },
        "[飞吻]": {
			name:"[飞吻]",
            file: require('../img/飞吻.png')
        },
        "[哈哈]": {
			name:"[哈哈]",
         file: require('../img/哈哈.png')
        },
        "[憨笑]": {
			name:"[憨笑]",
            file: require('../img/憨笑.png')
        },
        "[好的]": {
			name:"[好的]",
             file: require('../img/好的.png')
        },
        "[苦]": {
			name:"[苦]",
            file: require('../img/苦.png')
        },
        "[木]": {
			name:"[木]",
            file: require('../img/木.png')
        },
        "[难过]": {
			name:"[难过]",
            file: require('../img/难过.png')
        },
        "[难受]": {
			name:"[难受]",
             file: require('../img/难受.png')
        },
        "[亲亲]": {
			name:"[亲亲]",
             file: require('../img/亲亲.png')
        },
        "[生气]": {
			name:"[生气]",
            file: require('../img/生气.png')
        },
        "[睡觉]": {
			name:"[睡觉]",
            file: require('../img/睡觉.png')
        },
        "[天使]": {
			name:"[天使]",
            file: require('../img/天使.png')
        },
        "[痛苦]": {
			name:"[痛苦]",
            file: require('../img/痛苦.png')
        },
        "[吐舌]": {
			name:"[吐舌]",
            file: require('../img/吐舌.png')
        },
        "[哇]": {
			name:"[哇]",
            file: require('../img/哇.png')
        },
        "[微笑]": {
			name:"[微笑]",
            file: require('../img/微笑.png')
        },
        "[小可爱]": {
			name:"[小可爱]",
            file: require('../img/小可爱.png')
        },
        "[眼镜]": {
			name:"[眼镜]",
            file: require('../img/眼镜.png')
        },
        "[眨眼]": {
			name:"[眨眼]",
            file: require('../img/眨眼.png')
        },
       
    }
}
var emojiArr=[]
for (let emoji in emojiList) {
    let emojiItem = emojiList[emoji]
    for (let key in emojiItem) {
		
        let item = emojiItem[key]
       /* item.img = `${emojiBaseUrl}/${emoji}/${item.file}` */
	    /* item.img = require('../img/item.file')require('../img/眨眼.png')
		emojiArr.push(item) */
    }
}
for (let emoji in emojiList1) {
    let emojiItem = emojiList1[emoji]
    for (let key in emojiItem) {
		
        let item = emojiItem[key]
		console.log(item)
       /* item.img = `${emojiBaseUrl}/${emoji}/${item.file}` */
	   
		emojiArr.push(item)
    }
}

emojiList['ajmd'] = {}
emojiList['xxy'] = {}
emojiList['lt'] = {}

for (let i = 1; i <= 48; i++) {
    let key = 'ajmd0' + (i >= 10 ? i : '0' + i)
    emojiList['ajmd'][key] = {
        file: key + '.png'
    }
}
for (let i = 1; i <= 40; i++) {
    let key = 'xxy0' + (i >= 10 ? i : '0' + i)
    emojiList['xxy'][key] = {
        file: key + '.png'
    }
}
for (let i = 1; i <= 20; i++) {
    let key = 'lt0' + (i >= 10 ? i : '0' + i)
    emojiList['lt'][key] = {
        file: key + '.png'
    }
}

// 内容
for (let emoji in emojiList) {
    let emojiItem = emojiList[emoji]
    for (let key in emojiItem) {
        let item = emojiItem[key]
        item.img = `${emojiBaseUrl}/${emoji}/${item.file}`
    }
    // 封面
    albumArr.push({
        album: emoji,
        img: emojiItem[Object.keys(emojiItem)[0]]['img']
    })
}
// 添加删除按钮
emojiList['emoji']['[删除]'] = {}
emojiList['emoji']['[删除]']['img'] = iconEmojiDelete
let emojilist = []
let os = 0;
let arr = []
for (let key in emojiList.emoji) {
    if (emojiList.emoji[key]) {
        if (os <= 38) {
            os += 1
            arr.push({
                imageurl: emojiList.emoji[key].img,
                text: key
            })
        } else {
            emojilist.push(arr)
            os = 0
            arr = []
        }
    }
}
os = 0;
let ajmdlist = []
arr = []
for (let key in emojiList.ajmd) {
    if (emojiList.ajmd[key]) {
        if (os < 38) {
            os += 1
            arr.push({
                imageurl: emojiList.ajmd[key].img,
                text: key
            })
        } else {
            ajmdlist.push(arr)
            os = 0
            arr = []
        }
    }
}
os = 0;
arr = [];
let ltlist = []

for (let key in emojiList.lt) {
    if (emojiList.ajmd[key]) {
        if (os < 38) {
            os += 1
            arr.push({
                imageurl: emojiList.lt[key].img,
                text: key
            })
        } else {
            ltlist.push(arr)
            os = 0
            arr = []
        }
    }
}
os = 0;
arr = []
let xxylist = []
for (let key in emojiList.xxy) {
    if (emojiList.xxy[key]) {
        if (os < 38) {
            os += 1
            arr.push({
                imageurl: emojiList.xxy[key].img,
                text: key
            })
        } else {
            xxylist.push(arr)
            os = 0
            arr = []
        }
    }
}
export default {
    emojilist: [emojilist, ajmdlist, ltlist, xxylist],
    iconEmojiDelete,
    emojiList,
    albumArr,
	emojiArr
}