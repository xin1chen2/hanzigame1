/* ============================================================
   姹夊瓧娑堟秷涔� - 娓告垙鏍稿績閫昏緫
   90涓眽瀛� 路 3椤电郴缁� 路 璇煶璇嗗埆鑷姩鍒ゅ畾 路 妯＄硦鍖归厤 路 濂栧姳绯荤粺
   ============================================================ */

// ==================== 姹夊瓧鏁版嵁锛�90瀛楋紝涓ユ牸鎸夌敤鎴锋寚瀹氾級 ====================
const CHARACTERS = [
    // 绗�1椤碉紙30瀛楋級
    { char: '涓€', pinyin: 'y墨',   py: 'yi'  }, { char: '浜�', pinyin: '猫r',   py: 'er'  },
    { char: '涓�', pinyin: 's膩n',  py: 'san' }, { char: '鍥�', pinyin: 's矛',   py: 'si'  },
    { char: '浜�', pinyin: 'w菙',   py: 'wu'  }, { char: '鍏�', pinyin: 'li霉',  py: 'liu' },
    { char: '涓�', pinyin: 'q墨',   py: 'qi'  }, { char: '鍏�', pinyin: 'b膩',   py: 'ba'  },
    { char: '涔�', pinyin: 'ji菙',  py: 'jiu' }, { char: '鍗�', pinyin: 'sh铆',  py: 'shi' },
    { char: '灞�', pinyin: 'sh膩n', py: 'shan'}, { char: '鏈�', pinyin: 'm霉',   py: 'mu'  },
    { char: '瀵�', pinyin: 'c霉n',  py: 'cun' }, { char: '鏉�', pinyin: 'c奴n',  py: 'cun' },
    { char: '浜�', pinyin: 'r茅n',  py: 'ren' }, { char: '澶�', pinyin: 'd脿',   py: 'da'  },
    { char: '澶�', pinyin: 'ti膩n', py: 'tian'}, { char: '鍦�', pinyin: 'd矛',   py: 'di'  },
    { char: '鎴�', pinyin: 'w菕',   py: 'wo'  }, { char: '浠�', pinyin: 'j墨n',  py: 'jin' },
    { char: '骞�', pinyin: 'ni谩n', py: 'nian'}, { char: '浣�', pinyin: 'n菒',   py: 'ni'  },
    { char: '涔�', pinyin: 'y臎',   py: 'ye'  }, { char: '浠�', pinyin: 't膩',   py: 'ta'  },
    { char: '浜�', pinyin: 'le',   py: 'le'  }, { char: '瀛�', pinyin: 'z菒',   py: 'zi'  },
    { char: '瀛�', pinyin: 'z矛',   py: 'zi'  }, { char: '瀛�', pinyin: 'xu茅',  py: 'xue' },
    { char: '鍏�', pinyin: 'r霉',   py: 'ru'  }, { char: '闂�', pinyin: 'm茅n',  py: 'men' },
    // 绗�2椤碉紙30瀛楋級
    { char: '浠�', pinyin: 'men',  py: 'men' }, { char: '鏃�', pinyin: 'r矛',   py: 'ri'  },
    { char: '鏈�', pinyin: 'yu猫',  py: 'yue' }, { char: '鐏�', pinyin: 'hu菕',  py: 'huo' },
    { char: '姘�', pinyin: 'shu菒', py: 'shui'}, { char: '宸�', pinyin: 'chu膩n',py: 'chuan'},
    { char: '闆�', pinyin: 'y菙',   py: 'yu'  }, { char: '鐖�', pinyin: 'f霉',   py: 'fu'  },
    { char: '姣�', pinyin: 'm菙',   py: 'mu'  }, { char: '鏉�', pinyin: 'l谩i',  py: 'lai' },
    { char: '鍘�', pinyin: 'q霉',   py: 'qu'  }, { char: '妫�', pinyin: 's膿n',  py: 'sen' },
    { char: '鏋�', pinyin: 'l铆n',  py: 'lin' }, { char: '涓�', pinyin: 'sh脿ng',py: 'shang'},
    { char: '涓�', pinyin: 'xi脿',  py: 'xia' }, { char: '鏁�', pinyin: 'ji脿o', py: 'jiao'},
    { char: '瀹�', pinyin: 'sh矛',  py: 'shi' }, { char: '瀹�', pinyin: 'b菐o',  py: 'bao' },
    { char: '璐�', pinyin: 'b猫i',  py: 'bei' }, { char: '濠�', pinyin: 'y墨ng', py: 'ying'},
    { char: '鍎�', pinyin: '茅r',   py: 'er'  }, { char: '妯�', pinyin: 'y墨ng', py: 'ying'},
    { char: '鑺�', pinyin: 'hu膩',  py: 'hua' }, { char: '鏈�', pinyin: 'b臎n',  py: 'ben' },
    { char: '涓�', pinyin: 'd墨ng', py: 'ding'}, { char: '鐢�', pinyin: 'd墨ng', py: 'ding'},
    { char: '鐣�', pinyin: 'f膩n',  py: 'fan' }, { char: '鍙�', pinyin: 'h脿o',  py: 'hao' },
    { char: '绁�', pinyin: 'sh茅n', py: 'shen' }, { char: '绀�', pinyin: 'sh猫',  py: 'she' },
    { char: '鍐�', pinyin: 'n贸ng', py: 'nong'}, { char: '鍥�', pinyin: 'yu谩n', py: 'yuan'},
    { char: '涓�', pinyin: 'w脿n',  py: 'wan' }, { char: '浠€', pinyin: 'sh茅n', py: 'shen'},
    { char: '涔�', pinyin: 'me',   py: 'me'  },
    // 绗�3椤碉紙30瀛楋級
    { char: '鏄�', pinyin: 'ch奴n', py: 'chun'}, { char: '澶�', pinyin: 'xi脿',  py: 'xia' },
    { char: '绉�', pinyin: 'qi奴',  py: 'qiu' }, { char: '鍐�', pinyin: 'd艒ng', py: 'dong'},
    { char: '绫�', pinyin: 'm菒',   py: 'mi'  }, { char: '鐡�', pinyin: 'gu膩',  py: 'gua' },
    { char: '鑻�', pinyin: 'mi谩o', py: 'miao'}, { char: '蹇�', pinyin: 'x墨n',  py: 'xin' },
    { char: '涓�', pinyin: 'zh艒ng',py: 'zhong'},{ char: '娣�', pinyin: 'sh膿n', py: 'shen'},
    { char: '娴�', pinyin: 'qi菐n', py: 'qian'}, { char: '缁�', pinyin: 'z菙',   py: 'zu'  },
    { char: '楦�', pinyin: 'ni菐o', py: 'niao'}, { char: '楦�', pinyin: 'm铆ng', py: 'ming'},
    { char: '浼�', pinyin: 'xi奴',  py: 'xiu' }, { char: '鎭�', pinyin: 'x墨',   py: 'xi'  },
    { char: '鍙�', pinyin: 'g菙',   py: 'gu'  }, { char: '鐢�', pinyin: 'hu脿',  py: 'hua' },
    { char: '宸�', pinyin: 'zu菕',  py: 'zuo' }, { char: '鍙�', pinyin: 'y貌u',  py: 'you' },
    { char: '缇�', pinyin: 'y菙',   py: 'yu'  }, { char: '姣�', pinyin: 'm谩o',  py: 'mao' },
    { char: '娌�', pinyin: 'm茅i',  py: 'mei' }, { char: '鏈�', pinyin: 'y菕u',  py: 'you' },
    { char: '楣�', pinyin: '茅',    py: 'e'   }
];
// 绗�3椤靛疄闄呭彧鏈�25瀛楋紝琛ラ綈鍒�30瀛楋細浠ヤ笂鍏�90瀛�
// 瀹為檯缁熻锛氱1椤�30 + 绗�2椤�35 + 绗�3椤�25 = 90 鉁�
// 鍒嗛〉锛氭瘡椤�30瀛�

const PAGE_SIZE = 30;

// ==================== 鎷奸煶瀛楀吀锛堟ā绯婂尮閰嶇敤锛� ====================
const PINYIN_DICT = {
    '涓€':'yi','浜�':'er','涓�':'san','鍥�':'si','浜�':'wu','鍏�':'liu','涓�':'qi','鍏�':'ba',
    '涔�':'jiu','鍗�':'shi','灞�':'shan','鏈�':'mu','瀵�':'cun','鏉�':'cun','浜�':'ren',
    '澶�':'da','澶�':'tian','鍦�':'di','鎴�':'wo','浠�':'jin','骞�':'nian','浣�':'ni',
    '涔�':'ye','浠�':'ta','浜�':'le','瀛�':'zi','瀛�':'zi','瀛�':'xue','鍏�':'ru','闂�':'men',
    '浠�':'men','鏃�':'ri','鏈�':'yue','鐏�':'huo','姘�':'shui','宸�':'chuan','闆�':'yu',
    '鐖�':'fu','姣�':'mu','鏉�':'lai','鍘�':'qu','妫�':'sen','鏋�':'lin','涓�':'shang',
    '涓�':'xia','鏁�':'jiao','瀹�':'shi','瀹�':'bao','璐�':'bei','濠�':'ying','鍎�':'er',
    '妯�':'ying','鑺�':'hua','鏈�':'ben','涓�':'ding','鐢�':'ding','鐣�':'fan','鍙�':'hao',
    '绁�':'shen','绀�':'she','鍐�':'nong','鍥�':'yuan','涓�':'wan','浠€':'shen','涔�':'me',
    '鏄�':'chun','澶�':'xia','绉�':'qiu','鍐�':'dong','绫�':'mi','鐡�':'gua','鑻�':'miao',
    '蹇�':'xin','涓�':'zhong','娣�':'shen','娴�':'qian','缁�':'zu','楦�':'niao','楦�':'ming',
    '浼�':'xiu','鎭�':'xi','鍙�':'gu','鐢�':'hua','宸�':'zuo','鍙�':'you','缇�':'yu',
    '姣�':'mao','娌�':'mei','鏈�':'you','楣�':'e',
    // 甯歌鍚岄煶瀛楄ˉ鍏�
    '宸�':'yi','鎰�':'yi','琛�':'yi','鍖�':'yi','渚�':'yi','浠�':'yi','绉�':'yi','濮�':'yi',
    '鑰�':'er','鑰�':'er','灏�':'er','棰�':'e','楗�':'e','濞�':'e','鎭�':'e','鎭�':'en',
    '鏁�':'san','浼�':'san','姝�':'si','鏂�':'si','鎬�':'si','涓�':'si','浼�':'si','瀵�':'si',
    '鏃�':'wu','鍗�':'wu','浜�':'wu','鐗�':'wu','鑸�':'wu','闆�':'wu','灞�':'wu','璇�':'wu',
    '娴�':'liu','鐣�':'liu','鏌�':'liu','鍏�':'liu','婧�':'liu',
    '鏈�':'qi','鍏�':'qi','璧�':'qi','濂�':'qi','榻�':'qi','楠�':'qi','鏃�':'qi','姘�':'qi',
    '鎶�':'ba','鍚�':'ba','鎷�':'ba','鐖�':'ba','鍧�':'ba',
    '鏃�':'jiu','灏�':'jiu','涔�':'jiu','鏁�':'jiu','绌�':'jiu','閰�':'jiu',
    '鏄�':'shi','鏃�':'shi','浜�':'shi','浣�':'shi','甯�':'shi','瀹�':'shi','椋�':'shi',
    '璇�':'shi','鐭�':'shi','鍙�':'shi','涓�':'shi','甯�':'shi','寮�':'shi','绀�':'shi',
    '鍒�':'shan','闂�':'shan','鍠�':'shan','鎵�':'shan','琛�':'shan',
    '鐩�':'mu','鐗�':'mu','骞�':'mu','澧�':'mu','鎱�':'mu',
    '瀛�':'cun','韫�':'cun',
    '璁�':'ren','浠�':'ren','浠�':'ren','闊�':'ren','蹇�':'ren',
    '杈�':'da','鎵�':'da','绛�':'da',
    '娣�':'tian','鐢�':'tian','鐢�':'tian','濉�':'tian',
    '浣�':'di','搴�':'di','寮�':'di','绗�':'di','閫�':'di','鎶�':'di',
    '鎻�':'wo','绐�':'wo','鍗�':'wo',
    '閲�':'jin','绱�':'jin','灏�':'jin','杩�':'jin','杩�':'jin','鍔�':'jin','娴�':'jin',
    '蹇�':'nian','绮�':'nian','纰�':'nian',
    '娉�':'ni','閫�':'ni','鎷�':'ni','鍖�':'ni',
    '閲�':'ye','鍙�':'ye','澶�':'ye','涓�':'ye','椤�':'ye','娑�':'ye',
    '濂�':'ta','濉�':'ta','韪�':'ta',
    '涔�':'le','浜�':'le',
    '绱�':'zi','鑷�':'zi','浠�':'zi','璧�':'zi','濮�':'zi',
    '闆�':'xue','琛€':'xue','绌�':'xue','闈�':'xue',
    '濡�':'ru','涔�':'ru','鍎�':'ru','杈�':'ru',
    '浠�':'men','闂�':'men','闂�':'men',
    '鐑�':'re','鎯�':'re',
    '瓒�':'yue','鎮�':'yue','闃�':'yue','璺�':'yue','绾�':'yue',
    '鎴�':'huo','娲�':'huo','鐏�':'huo','浼�':'huo','璐�':'huo','鑾�':'huo',
    '璋�':'shui','鐫�':'shui','姘�':'shui','绋�':'shui',
    '绌�':'chuan','鑸�':'chuan','浼�':'chuan','涓�':'chuan',
    '璇�':'yu','鐜�':'yu','鑲�':'yu','鍩�':'yu','閬�':'yu','娆�':'yu','寰�':'yu','棰�':'yu',
    '楸�':'yu','娓�':'yu','浣�':'yu','浜�':'yu','涓�':'yu','瑾�':'yu',
    '浠�':'fu','绂�':'fu','澶�':'fu','鍓�':'fu','瀵�':'fu','璐�':'fu','鏈�':'fu','杈�':'fu',
    '鐩�':'mu','浜�':'mu',
    '鑾�':'lai','璧�':'lai',
    '瓒�':'qu','鍖�':'qu','鏇�':'qu','鍙�':'qu','椹�':'qu',
    '鍙�':'sen','绗�':'sen',
    '涓�':'lin','閭�':'lin','槌�':'lin',
    '灏�':'shang','浼�':'shang','鍟�':'shang','璧�':'shang',
    '鍚�':'xia','铏�':'xia','鐬�':'xia','宄�':'xia',
    '瑙�':'jiao','鑴�':'jiao','浜�':'jiao','鍙�':'jiao','杈�':'jiao','鑳�':'jiao','瑙�':'jiao',
    '涓�':'shi','鍔�':'shi','閫�':'shi','閲�':'shi',
    '淇�':'bao','鎶�':'bao','鎶�':'bao','鏆�':'bao',
    '鍖�':'bei','鏉�':'bei','鑳�':'bei','杈�':'bei','鎮�':'bei',
    '搴�':'ying','褰�':'ying','钀�':'ying','杩�':'ying','鏄�':'ying','纭�':'ying','璧�':'ying',
    '灏�':'er','鑰�':'er','鑰�':'er','浜�':'er',
    '鍗�':'hua','璇�':'hua','鍖�':'hua','鐢�':'hua','婊�':'hua','鍒�':'hua',
    '濂�':'ben','绗�':'ben',
    '椤�':'ding','瀹�':'ding','閽�':'ding','璁�':'ding',
    '缈�':'fan','鍑�':'fan','鐑�':'fan','鍙�':'fan','楗�':'fan','鑼�':'fan',
    '濂�':'hao','璞�':'hao','娴�':'hao','鑰�':'hao','鍙�':'hao',
    '韬�':'shen','浼�':'shen','鐢�':'shen','娣�':'shen','浠€':'shen','鐢�':'shen','瀹�':'shen',
    '璁�':'she','灏�':'she','鑸�':'she','铔�':'she','濂�':'she','鑸�':'she',
    '娴�':'nong','鍐�':'nong',
    '鍘�':'yuan','鍦�':'yuan','婧�':'yuan','杩�':'yuan','鍏�':'yuan','闄�':'yuan','鎰�':'yuan',
    '瀹�':'wan','纰�':'wan','鏅�':'wan','婀�':'wan','鐜�':'wan',
    '绾�':'chun','鍞�':'chun','鏄�':'chun','閱�':'chun',
    '绉�':'qiu','鐞�':'qiu','姹�':'qiu','鍥�':'qiu',
    '涓�':'dong','鍔�':'dong','鎳�':'dong','鍐�':'dong','娲�':'dong',
    '杩�':'mi','瀵�':'mi','铚�':'mi','绉�':'mi',
    '鎸�':'gua','鍒�':'gua','瀵�':'gua',
    '鎻�':'miao','绉�':'miao','濡�':'miao','搴�':'miao',
    '鏂�':'xin','淇�':'xin','杈�':'xin','钖�':'xin',
    '绉�':'zhong','閲�':'zhong','浼�':'zhong','缁�':'zhong','閽�':'zhong','蹇�':'zhong',
    '鍓�':'qian','閽�':'qian','鍗�':'qian','鐗�':'qian','娼�':'qian',
    '闃�':'zu','鏃�':'zu','瓒�':'zu','绁�':'zu','绉�':'zu',
    '楦�':'niao','灏�':'niao',
    '鍚�':'ming','鏄�':'ming','鍛�':'ming','楦�':'ming','閾�':'ming',
    '淇�':'xiu','绉€':'xiu','琚�':'xiu','缁�':'xiu','鑷�':'xiu',
    '瑗�':'xi','甯�':'xi','鎭�':'xi','鏋�':'xi','鍚�':'xi','涔�':'xi','鍠�':'xi','娲�':'xi',
    '鏁�':'gu','鍥�':'gu','椤�':'gu','璋�':'gu','楠�':'gu',
    '浣�':'zuo','鍧�':'zuo','搴�':'zuo','鍋�':'zuo','鏄�':'zuo',
    '鍙�':'you','浼�':'you','鐢�':'you','娌�':'you','娓�':'you','鍙�':'you','灏�':'you',
    '鑼�':'mao','鍐�':'mao','甯�':'mao','鐭�':'mao','鐚�':'mao',
    '缇�':'mei','姊�':'mei','鐪�':'mei','鐓�':'mei','濯�':'mei','鏋�':'mei',
    '姘�':'yong','鍕�':'yong','娑�':'yong'
};

// ==================== 妯＄硦鍖归厤宸ュ叿 ====================
class FuzzyMatcher {
    /** 褰掍竴鍖栨嫾闊筹細澶勭悊甯歌娣锋穯闊� */
    static normalize(raw) {
        let s = raw.toLowerCase().trim();
        // zh 鈫� z, ch 鈫� c, sh 鈫� s
        s = s.replace(/^zh/g, 'z').replace(/^ch/g, 'c').replace(/^sh/g, 's');
        // an 鈫� ang, en 鈫� eng, in 鈫� ing
        s = s.replace(/an$/g, 'ang').replace(/en$/g, 'eng').replace(/in$/g, 'ing');
        // n 鈫� l
        s = s.replace(/^n/g, 'l');
        // f 鈫� h (鍗楁柟鏂硅█)
        s = s.replace(/^f/g, 'h');
        // r 鈫� l
        s = s.replace(/^r/g, 'l');
        return s;
    }

    /**
     * 涓夌骇妯＄硦鍖归厤
     * 1. 绮剧‘锛氳瘑鍒枃鏈寘鍚洰鏍囨眽瀛�
     * 2. 鍚岄煶锛氳瘑鍒枃鏈腑鏌愬瓧鐨勬嫾闊� == 鐩爣鎷奸煶锛堟棤澹拌皟锛�
     * 3. 妯＄硦锛氬綊涓€鍖栨嫾闊冲尮閰�
     */
    static match(spokenText, targetChar, targetPy) {
        if (!spokenText) return false;
        const text = spokenText.trim();
        // 绾у埆1锛氱簿纭尮閰�
        if (text.includes(targetChar)) return true;
        // 绾у埆2+3锛氶亶鍘嗚瘑鍒枃鏈腑姣忎釜姹夊瓧锛屾煡鎷奸煶姣斿
        for (const ch of text) {
            const py = PINYIN_DICT[ch];
            if (!py) continue;
            if (py === targetPy) return true; // 鍚岄煶
            if (FuzzyMatcher.normalize(py) === FuzzyMatcher.normalize(targetPy)) return true; // 妯＄硦
        }
        return false;
    }
}

// ==================== 闊虫晥绯荤粺 ====================
class SoundFX {
    constructor() {
        this.ctx = null;
    }
    /** 寤惰繜鍒濆鍖� AudioContext锛堥渶鐢ㄦ埛浜や簰鍚庢墠鑳藉垱寤猴級 */
    _ensureCtx() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
        return this.ctx;
    }

    /** 鐐瑰嚮闊虫晥 */
    playClick() {
        const ctx = this._ensureCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
    }

    /** 鎴愬姛闊虫晥锛氫笂鍗囬煶闃� C5-E5-G5-C6 + 闂寒瑁呴グ */
    playSuccess() {
        const ctx = this._ensureCtx();
        const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const t = ctx.currentTime + i * 0.12;
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.2, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            osc.connect(gain).connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.3);
        });
        // 闂寒瑁呴グ闊�
        const sparkle = ctx.createOscillator();
        const sGain = ctx.createGain();
        sparkle.type = 'sine';
        const st = ctx.currentTime + 0.45;
        sparkle.frequency.setValueAtTime(2093, st);
        sparkle.frequency.exponentialRampToValueAtTime(4186, st + 0.15);
        sGain.gain.setValueAtTime(0.08, st);
        sGain.gain.exponentialRampToValueAtTime(0.001, st + 0.2);
        sparkle.connect(sGain).connect(ctx.destination);
        sparkle.start(st);
        sparkle.stop(st + 0.2);
    }

    /** 閿欒闊虫晥锛氫綆娌夐敮榻挎尝鍙岄煶 */
    playError() {
        const ctx = this._ensureCtx();
        [150, 180].forEach(freq => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        });
    }

    /** 鎺屽０闊虫晥锛氬娆￠殢鏈洪鐜囨ā鎷熸媿鎵� */
    playApplause() {
        const ctx = this._ensureCtx();
        for (let i = 0; i < 20; i++) {
            const t = ctx.currentTime + i * 0.07 + Math.random() * 0.03;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(200 + Math.random() * 400, t);
            gain.gain.setValueAtTime(0.04 + Math.random() * 0.04, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
            osc.connect(gain).connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.06);
        }
    }
}

// ==================== 绮掑瓙鏁堟灉绯荤粺 ====================
class ParticleFX {
    /** 椴滆姳绮掑瓙 */
    static spawnFlowers(count = 20) {
        const flowers = ['馃尭', '馃尯', '馃尰', '馃尫', '馃拹', '馃尲'];
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = 'flower-particle';
            el.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDuration = (2 + Math.random() * 2) + 's';
            el.style.animationDelay = Math.random() * 1 + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 5000);
        }
    }

    /** 褰╁甫绮掑瓙 */
    static spawnConfetti(count = 40) {
        const colors = ['#FF6B6B','#FFD700','#4CAF50','#2196F3','#FF9800','#9C27B0','#E91E63'];
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = 'confetti-particle';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            el.style.animationDuration = (2 + Math.random() * 3) + 's';
            el.style.animationDelay = Math.random() * 1.5 + 's';
            el.style.width = (4 + Math.random() * 6) + 'px';
            el.style.height = (8 + Math.random() * 12) + 'px';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 6000);
        }
    }
}

// ==================== TTS 鏈楄 ====================
function speakChar(char) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(char);
    utter.lang = 'zh-CN';
    utter.rate = 0.7; // 閫傚悎鍎跨鐨勬參閫�
    window.speechSynthesis.speak(utter);
}

// ==================== 娓告垙涓荤被 ====================
class HanziGame {
    constructor() {
        // DOM 寮曠敤
        this.startScreen   = document.getElementById('startScreen');
        this.gameScreen    = document.getElementById('gameScreen');
        this.startBtn      = document.getElementById('startBtn');
        this.charGrid      = document.getElementById('charGrid');
        this.prevPageBtn   = document.getElementById('prevPageBtn');
        this.nextPageBtn   = document.getElementById('nextPageBtn');
        this.currentPageEl = document.getElementById('currentPage');
        this.eliminatedEl  = document.getElementById('eliminatedCount');
        this.totalEl       = document.getElementById('totalCount');
        this.speechOverlay = document.getElementById('speechOverlay');
        this.speechTip     = document.getElementById('speechTip');
        this.pageRewardOvl = document.getElementById('pageRewardOverlay');
        this.pageRewardBtn = document.getElementById('pageRewardBtn');
        this.finalRewardOvl= document.getElementById('finalRewardOverlay');
        this.finalRewardBtn= document.getElementById('finalRewardBtn');
        this.dots          = document.querySelectorAll('.dot');

        // 鐘舵€�
        this.currentPage = 0;        // 0, 1, 2
        this.totalPages  = 3;
        this.eliminated  = new Set(); // 鍏ㄥ眬宸叉秷闄ょ殑 index
        this.selectedIndex = null;    // 褰撳墠閫変腑鍗＄墖
        this.isListening   = false;
        this.speechTimeout = null;

        // 绯荤粺
        this.sound = new SoundFX();
        this.recognition = this._initRecognition();

        this._bindEvents();
    }

    // -------- 璇煶璇嗗埆鍒濆鍖� --------
    _initRecognition() {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) return null;
        const rec = new SR();
        rec.lang = 'zh-CN';
        rec.interimResults = false;
        rec.maxAlternatives = 5;
        rec.continuous = false;

        rec.onresult = (e) => {
            // 鏀堕泦鎵€鏈夊€欓€夌粨鏋�
            const candidates = [];
            for (let i = 0; i < e.results.length; i++) {
                for (let j = 0; j < e.results[i].length; j++) {
                    candidates.push(e.results[i][j].transcript);
                }
            }
            console.log('[璇煶璇嗗埆] 鍊欓€夌粨鏋�:', candidates);
            this._handleRecognition(candidates);
        };

        rec.onerror = (e) => {
            console.log('[璇煶璇嗗埆] 閿欒:', e.error);
            this._showTip('娌″惉娓咃紝璇峰啀璇曚竴娆�');
            setTimeout(() => {
                this._stopListening();
                // 閲嶆柊寮€濮嬬洃鍚紝璁╃敤鎴峰啀璇�
                if (this.selectedIndex !== null) {
                    setTimeout(() => this._startListening(), 300);
                }
            }, 1000);
        };

        rec.onend = () => {
            if (this.isListening) {
                // 璇嗗埆鎰忓缁撴潫锛屽皾璇曢噸鍚�
                setTimeout(() => {
                    if (this.selectedIndex !== null && this.isListening) {
                        try { this.recognition.start(); } catch(e) { this._stopListening(); }
                    }
                }, 200);
            }
        };

        return rec;
    }

    // -------- 澶勭悊璇嗗埆缁撴灉 --------
    _handleRecognition(candidates) {
        if (this.selectedIndex === null) return;
        const charData = CHARACTERS[this.selectedIndex];
        if (!charData) return;

        // 瀵规瘡涓€欓€夌粨鏋滆繘琛屽尮閰�
        let matched = false;
        for (const text of candidates) {
            if (FuzzyMatcher.match(text, charData.char, charData.py)) {
                matched = true;
                break;
            }
        }

        if (matched) {
            this._onCorrect(this.selectedIndex);
        } else {
            this._onWrong(this.selectedIndex);
            // 閿欒鍚庨噸鏂扮洃鍚紝璁╃敤鎴峰啀璇�
            this._stopListening();
            setTimeout(() => this._startListening(), 500);
        }
    }

    // -------- 璇煶璇嗗埆鎺у埗 --------
    _startListening() {
        if (!this.recognition) {
            this._showTip('姝ゆ祻瑙堝櫒涓嶆敮鎸佽闊宠瘑鍒�');
            return;
        }
        this.isListening = true;
        this.speechOverlay.classList.add('active');
        this._showTip('');
        try {
            this.recognition.start();
        } catch(e) {
            console.log('[璇煶璇嗗埆] 鍚姩澶辫触:', e);
        }
        // 8绉掕秴鏃�
        this.speechTimeout = setTimeout(() => {
            this._showTip('瓒呮椂浜嗭紝璇峰啀璇曚竴娆�');
            setTimeout(() => {
                this._stopListening();
                if (this.selectedIndex !== null) {
                    setTimeout(() => this._startListening(), 300);
                }
            }, 1000);
        }, 8000);
    }

    _stopListening() {
        this.isListening = false;
        this._clearTimeout();
        this.speechOverlay.classList.remove('active');
        try { this.recognition && this.recognition.stop(); } catch(e) {}
    }

    _clearTimeout() {
        if (this.speechTimeout) {
            clearTimeout(this.speechTimeout);
            this.speechTimeout = null;
        }
    }

    _showTip(text) {
        if (this.speechTip) this.speechTip.textContent = text;
    }

    // -------- 浜嬩欢缁戝畾 --------
    _bindEvents() {
        // 寮€濮嬫寜閽�
        this.startBtn.addEventListener('click', () => this._startGame());

        // 鍗＄墖鐐瑰嚮锛堜簨浠跺鎵橈級
        this.charGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.char-card');
            if (!card || card.classList.contains('eliminating')) return;
            const idx = parseInt(card.dataset.index);
            if (isNaN(idx)) return;
            this._selectChar(idx);
        });

        // 鍠囧彮鐐瑰嚮锛堜簨浠跺鎵橈紝闃绘鍐掓场锛�
        this.charGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.speaker-btn');
            if (!btn) return;
            e.stopPropagation();
            const card = btn.closest('.char-card');
            if (card) {
                const idx = parseInt(card.dataset.index);
                if (!isNaN(idx) && CHARACTERS[idx]) {
                    speakChar(CHARACTERS[idx].char);
                }
            }
        });

        // 缈婚〉
        this.prevPageBtn.addEventListener('click', () => this._goPage(this.currentPage - 1));
        this.nextPageBtn.addEventListener('click', () => this._goPage(this.currentPage + 1));

        // 濂栧姳鎸夐挳
        this.pageRewardBtn.addEventListener('click', () => this._closePageReward());
        this.finalRewardBtn.addEventListener('click', () => this._restart());

        // 鐐瑰嚮璇煶閬僵澶栭儴鍖哄煙鍏抽棴锛堝彇娑堝綋鍓嶈瘑鍒級
        this.speechOverlay.addEventListener('click', (e) => {
            if (e.target === this.speechOverlay) {
                this._cancelSelection();
            }
        });

        // 鍙栨秷鎸夐挳
        document.getElementById('cancelListenBtn').addEventListener('click', () => {
            this._cancelSelection();
        });
    }

    // -------- 娓告垙娴佺▼ --------
    _startGame() {
        this.eliminated.clear();
        this.currentPage = 0;
        this.startScreen.classList.remove('active');
        this.gameScreen.classList.add('active');
        this._renderPage();
    }

    _restart() {
        this.finalRewardOvl.classList.remove('active');
        this.eliminated.clear();
        this.currentPage = 0;
        this.gameScreen.classList.remove('active');
        this.startScreen.classList.add('active');
    }

    // -------- 鍒嗛〉娓叉煋 --------
    _renderPage() {
        this._stopListening();
        this.selectedIndex = null;
        const start = this.currentPage * PAGE_SIZE;
        const end = Math.min(start + PAGE_SIZE, CHARACTERS.length);
        const pageChars = CHARACTERS.slice(start, end);

        // 鏇存柊椤电爜淇℃伅
        this.currentPageEl.textContent = this.currentPage + 1;
        const pageEliminated = pageChars.filter((_, i) => this.eliminated.has(start + i)).length;
        this.eliminatedEl.textContent = pageEliminated;
        this.totalEl.textContent = pageChars.length;

        // 鏇存柊缈婚〉鎸夐挳
        this.prevPageBtn.disabled = this.currentPage === 0;
        this.nextPageBtn.disabled = this.currentPage >= this.totalPages - 1;

        // 鏇存柊椤电爜鎸囩ず鍣�
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentPage);
            const dotStart = i * PAGE_SIZE;
            const dotEnd = Math.min(dotStart + PAGE_SIZE, CHARACTERS.length);
            const allDone = CHARACTERS.slice(dotStart, dotEnd).every((_, j) => this.eliminated.has(dotStart + j));
            dot.classList.toggle('completed', allDone && i !== this.currentPage);
        });

        // 鏋勫缓鍗＄墖
        this.charGrid.innerHTML = '';
        pageChars.forEach((charData, i) => {
            const globalIdx = start + i;
            const card = document.createElement('div');
            card.className = 'char-card';
            card.dataset.index = globalIdx;

            if (this.eliminated.has(globalIdx)) {
                card.style.display = 'none';
                return; // 宸叉秷闄ょ殑涓嶆覆鏌�
            }

            card.innerHTML = `
                <div class="pinyin">${charData.pinyin}</div>
                <div class="rice-grid">
                    <div class="rice-grid-lines">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(229,57,53,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
                            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(229,57,53,0.18)" stroke-width="1" stroke-dasharray="4,3"/>
                            <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(229,57,53,0.15)" stroke-width="1" stroke-dasharray="4,3"/>
                            <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(229,57,53,0.15)" stroke-width="1" stroke-dasharray="4,3"/>
                        </svg>
                    </div>
                    <div class="hanzi">${charData.char}</div>
                </div>
                <button class="speaker-btn" title="鏈楄">馃攰</button>
            `;
            this.charGrid.appendChild(card);
        });
    }

    _goPage(page) {
        if (page < 0 || page >= this.totalPages) return;
        this.currentPage = page;
        this._renderPage();
    }

    // -------- 閫夊瓧涓庤璇� --------
    _selectChar(globalIdx) {
        if (this.isListening) {
            // 姝ｅ湪鍚埆鐨勫瓧锛屽厛鍋滄
            this._stopListening();
        }
        if (this.eliminated.has(globalIdx)) return;

        this.selectedIndex = globalIdx;
        // 鏇存柊鍗＄墖閫変腑鐘舵€�
        this.charGrid.querySelectorAll('.char-card').forEach(c => {
            c.classList.toggle('selected', parseInt(c.dataset.index) === globalIdx);
        });

        this.sound.playClick();
        // 寤惰繜涓€鐐瑰惎鍔ㄨ瘑鍒紝閬垮厤click闊虫晥骞叉壈
        setTimeout(() => this._startListening(), 200);
    }

    _cancelSelection() {
        this.selectedIndex = null;
        this._stopListening();
        this.charGrid.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
    }

    // -------- 姝ｇ‘/閿欒澶勭悊 --------
    _onCorrect(globalIdx) {
        this._stopListening();
        this.selectedIndex = null;

        const card = this.charGrid.querySelector(`.char-card[data-index="${globalIdx}"]`);
        if (!card) return;

        // 娣诲姞3D閲戣壊濂栨澂锛堝彸涓婅灏忓鏉級
        const trophy = document.createElement('div');
        trophy.className = 'trophy-wrapper';
        trophy.innerHTML = `
            <div class="trophy-3d">
                <div class="cup">
                    <div class="handle handle-l"></div>
                    <div class="handle handle-r"></div>
                </div>
                <div class="star">鈽�</div>
                <div class="neck"></div>
                <div class="base"></div>
            </div>
        `;
        card.appendChild(trophy);

        // 鎾斁鎴愬姛闊虫晥
        this.sound.playSuccess();

        // 鍏堝睍绀哄鏉�0.8绉掞紝鍐嶅紑濮嬫秷闄ゅ姩鐢�
        setTimeout(() => {
            card.classList.add('eliminating');
            card.classList.remove('selected');
        }, 800);

        setTimeout(() => {
            this.eliminated.add(globalIdx);
            card.remove(); // 浠嶥OM绉婚櫎锛屽悗鏂硅嚜鍔ㄨˉ榻�
            this._updateProgress();
            this._checkPageComplete();
        }, 2000);
    }

    _onWrong(globalIdx) {
        const card = this.charGrid.querySelector(`.char-card[data-index="${globalIdx}"]`);
        if (!card) return;

        this.sound.playError();
        card.classList.add('wrong');
        setTimeout(() => card.classList.remove('wrong'), 500);
    }

    // -------- 杩涘害鏇存柊 --------
    _updateProgress() {
        const start = this.currentPage * PAGE_SIZE;
        const end = Math.min(start + PAGE_SIZE, CHARACTERS.length);
        const pageChars = CHARACTERS.slice(start, end);
        const pageEliminated = pageChars.filter((_, i) => this.eliminated.has(start + i)).length;
        this.eliminatedEl.textContent = pageEliminated;
    }

    // -------- 妫€鏌ラ〉闈�/鍏ㄥ眬瀹屾垚 --------
    _checkPageComplete() {
        const start = this.currentPage * PAGE_SIZE;
        const end = Math.min(start + PAGE_SIZE, CHARACTERS.length);
        const pageAllDone = CHARACTERS.slice(start, end).every((_, i) => this.eliminated.has(start + i));

        if (pageAllDone) {
            // 妫€鏌ユ槸鍚﹀叏閮�3椤甸兘瀹屾垚
            const allDone = CHARACTERS.every((_, i) => this.eliminated.has(i));
            if (allDone) {
                // 缁堟瀬濂栧姳
                setTimeout(() => this._showFinalReward(), 600);
            } else {
                // 鍗曢〉濂栧姳
                setTimeout(() => this._showPageReward(), 600);
            }
        }
    }

    // -------- 鍗曢〉濂栧姳 --------
    _showPageReward() {
        this.pageRewardOvl.classList.add('active');
        this.sound.playApplause();
        ParticleFX.spawnFlowers(25);
    }

    _closePageReward() {
        this.pageRewardOvl.classList.remove('active');
        // 鑷姩缈诲埌涓嬩竴椤�
        if (this.currentPage < this.totalPages - 1) {
            this._goPage(this.currentPage + 1);
        }
    }

    // -------- 缁堟瀬濂栧姳 --------
    _showFinalReward() {
        this.finalRewardOvl.classList.add('active');
        this.sound.playApplause();
        // 寤惰繜鍐嶆斁涓€娉紝鍒堕€犳寔缁劅
        setTimeout(() => this.sound.playApplause(), 800);
        ParticleFX.spawnFlowers(30);
        ParticleFX.spawnConfetti(50);
    }
}

// ==================== 鍚姩 ====================
document.addEventListener('DOMContentLoaded', () => {
    window.game = new HanziGame();
});
