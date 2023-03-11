// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: jgmy1.ggsk
// Generated 2022-09-15T16:38:44

function pano2vrSkin(player,base) {
	player.addVariable('ht_ani', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('vis_thumbnail_menu_1', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('vis_auto_hide_controller_1', 2, true);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_loader_1', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._crosshair=document.createElement('div');
		els=me._crosshair__img=document.createElement('img');
		els.className='ggskin ggskin_crosshair';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKklEQVQImWP4//8/w////xkYGBgaYGwmBiyAkYGBoQHKbkBiwwFcAKt2AP1CDnqHspqBAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="crosshair";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._crosshair.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._crosshair.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._crosshair);
		el=me._ht_node_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="ht_node_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_timer.ggIsActive=function() {
			return (me._ht_node_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._ht_node_timer.ggTimestamp) / me._ht_node_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ht_node_timer.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._ht_node_timer.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._ht_node_timer.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ht_node_timer);
		el=me._c_menu=document.createElement('div');
		el.ggId="C_Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._c_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "Aerial view"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._c_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._c_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._c_menu.style[domTransition]='';
				if (me._c_menu.ggCurrentLogicStateVisible == 0) {
					me._c_menu.style.visibility=(Number(me._c_menu.style.opacity)>0||!me._c_menu.style.opacity)?'inherit':'hidden';
					me._c_menu.ggVisible=true;
				}
				else {
					me._c_menu.style.visibility="hidden";
					me._c_menu.ggVisible=false;
				}
			}
		}
		me._c_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._c_fj=document.createElement('div');
		el.ggId="C_fj";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 108px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c_fj.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_fj.onclick=function (e) {
			me._sy_on.ggVisible = !me._sy_on.ggVisible;
			var flag=me._sy_on.ggVisible;
			me._sy_on.style[domTransition]='none';
			me._sy_on.style.visibility=((flag)&&(Number(me._sy_on.style.opacity)>0||!me._sy_on.style.opacity))?'inherit':'hidden';
			me._jy_off.style[domTransition]='none';
			me._jy_off.style.visibility=(Number(me._jy_off.style.opacity)>0||!me._jy_off.style.opacity)?'inherit':'hidden';
			me._jy_off.ggVisible=true;
			me._jy_on.style[domTransition]='none';
			me._jy_on.style.visibility='hidden';
			me._jy_on.ggVisible=false;
			var list=me.findElements("ht_jy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_sy",true);
			if (list.length>0) {
				var e=list[0];
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
			}
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("ht_jt",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_yl",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._st_on.style[domTransition]='none';
			me._st_on.style.visibility='hidden';
			me._st_on.ggVisible=false;
			me._st_off.style[domTransition]='none';
			me._st_off.style.visibility=(Number(me._st_off.style.opacity)>0||!me._st_off.style.opacity)?'inherit':'hidden';
			me._st_off.ggVisible=true;
			var list=me.findElements("ht_st",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_on.style[domTransition]='none';
			me._jt_on.style.visibility='hidden';
			me._jt_on.ggVisible=false;
			var list=me.findElements("ht_jt",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_off.style[domTransition]='none';
			me._jt_off.style.visibility=(Number(me._jt_off.style.opacity)>0||!me._jt_off.style.opacity)?'inherit':'hidden';
			me._jt_off.ggVisible=true;
			me._sy_off.ggVisible = !me._sy_off.ggVisible;
			var flag=me._sy_off.ggVisible;
			me._sy_off.style[domTransition]='none';
			me._sy_off.style.visibility=((flag)&&(Number(me._sy_off.style.opacity)>0||!me._sy_off.style.opacity))?'inherit':'hidden';
		}
		me._c_fj.ggUpdatePosition=function (useTransition) {
		}
		el=me._sy_off=document.createElement('div');
		el.ggId="sy_off";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sy_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sy_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_200=document.createElement('div');
		els=me._image_200__img=document.createElement('img');
		els.className='ggskin ggskin_image_200';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 20";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_200.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_200.ggUpdatePosition=function (useTransition) {
		}
		me._sy_off.appendChild(me._image_200);
		me._c_fj.appendChild(me._sy_off);
		el=me._sy_on=document.createElement('div');
		el.ggId="sy_on";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #7d848d;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sy_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sy_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs=basePath + 'images/image_19.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_19.ggUpdatePosition=function (useTransition) {
		}
		me._sy_on.appendChild(me._image_19);
		me._c_fj.appendChild(me._sy_on);
		me._c_menu.appendChild(me._c_fj);
		el=me._c_st=document.createElement('div');
		el.ggId="C_st";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c_st.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_st.onclick=function (e) {
			me._jy_off.style[domTransition]='none';
			me._jy_off.style.visibility=(Number(me._jy_off.style.opacity)>0||!me._jy_off.style.opacity)?'inherit':'hidden';
			me._jy_off.ggVisible=true;
			me._jy_on.style[domTransition]='none';
			me._jy_on.style.visibility='hidden';
			me._jy_on.ggVisible=false;
			me._sy_off.style[domTransition]='none';
			me._sy_off.style.visibility=(Number(me._sy_off.style.opacity)>0||!me._sy_off.style.opacity)?'inherit':'hidden';
			me._sy_off.ggVisible=true;
			me._sy_on.style[domTransition]='none';
			me._sy_on.style.visibility='hidden';
			me._sy_on.ggVisible=false;
			var list=me.findElements("ht_yl",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_fj",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_jy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_sy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._st_on.ggVisible = !me._st_on.ggVisible;
			var flag=me._st_on.ggVisible;
			me._st_on.style[domTransition]='none';
			me._st_on.style.visibility=((flag)&&(Number(me._st_on.style.opacity)>0||!me._st_on.style.opacity))?'inherit':'hidden';
			var list=me.findElements("ht_st",true);
			if (list.length>0) {
				var e=list[0];
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
			}
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			me._jt_on.style[domTransition]='none';
			me._jt_on.style.visibility='hidden';
			me._jt_on.ggVisible=false;
			var list=me.findElements("ht_jt",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_off.style[domTransition]='none';
			me._jt_off.style.visibility=(Number(me._jt_off.style.opacity)>0||!me._jt_off.style.opacity)?'inherit':'hidden';
			me._jt_off.ggVisible=true;
			me._st_off.ggVisible = !me._st_off.ggVisible;
			var flag=me._st_off.ggVisible;
			me._st_off.style[domTransition]='none';
			me._st_off.style.visibility=((flag)&&(Number(me._st_off.style.opacity)>0||!me._st_off.style.opacity))?'inherit':'hidden';
		}
		me._c_st.ggUpdatePosition=function (useTransition) {
		}
		el=me._st_off=document.createElement('div');
		el.ggId="st_off";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._st_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._st_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_18=document.createElement('div');
		els=me._image_18__img=document.createElement('img');
		els.className='ggskin ggskin_image_18';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_18.ggUpdatePosition=function (useTransition) {
		}
		me._st_off.appendChild(me._image_18);
		me._c_st.appendChild(me._st_off);
		el=me._st_on=document.createElement('div');
		el.ggId="st_on";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #7d848d;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._st_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._st_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs=basePath + 'images/image_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me._st_on.appendChild(me._image_17);
		me._c_st.appendChild(me._st_on);
		me._c_menu.appendChild(me._c_st);
		el=me._c_jy=document.createElement('div');
		el.ggId="C_jy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c_jy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_jy.onclick=function (e) {
			me._jy_on.ggVisible = !me._jy_on.ggVisible;
			var flag=me._jy_on.ggVisible;
			me._jy_on.style[domTransition]='none';
			me._jy_on.style.visibility=((flag)&&(Number(me._jy_on.style.opacity)>0||!me._jy_on.style.opacity))?'inherit':'hidden';
			me._sy_off.style[domTransition]='none';
			me._sy_off.style.visibility=(Number(me._sy_off.style.opacity)>0||!me._sy_off.style.opacity)?'inherit':'hidden';
			me._sy_off.ggVisible=true;
			me._sy_on.style[domTransition]='none';
			me._sy_on.style.visibility='hidden';
			me._sy_on.ggVisible=false;
			var list=me.findElements("ht_jy",true);
			if (list.length>0) {
				var e=list[0];
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
			}
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			var list=me.findElements("ht_fj",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_sy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_yl",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._st_on.style[domTransition]='none';
			me._st_on.style.visibility='hidden';
			me._st_on.ggVisible=false;
			me._st_off.style[domTransition]='none';
			me._st_off.style.visibility=(Number(me._st_off.style.opacity)>0||!me._st_off.style.opacity)?'inherit':'hidden';
			me._st_off.ggVisible=true;
			var list=me.findElements("ht_st",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_on.style[domTransition]='none';
			me._jt_on.style.visibility='hidden';
			me._jt_on.ggVisible=false;
			var list=me.findElements("ht_jt",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_off.style[domTransition]='none';
			me._jt_off.style.visibility=(Number(me._jt_off.style.opacity)>0||!me._jt_off.style.opacity)?'inherit':'hidden';
			me._jt_off.ggVisible=true;
			me._jy_off.ggVisible = !me._jy_off.ggVisible;
			var flag=me._jy_off.ggVisible;
			me._jy_off.style[domTransition]='none';
			me._jy_off.style.visibility=((flag)&&(Number(me._jy_off.style.opacity)>0||!me._jy_off.style.opacity))?'inherit':'hidden';
		}
		me._c_jy.ggUpdatePosition=function (useTransition) {
		}
		el=me._jy_off=document.createElement('div');
		el.ggId="jy_off";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jy_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jy_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,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'+
			'gAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._jy_off.appendChild(me._image_16);
		me._c_jy.appendChild(me._jy_off);
		el=me._jy_on=document.createElement('div');
		el.ggId="jy_on";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #b2915b;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jy_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jy_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs=basePath + 'images/image_15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me._jy_on.appendChild(me._image_15);
		me._c_jy.appendChild(me._jy_on);
		me._c_menu.appendChild(me._c_jy);
		el=me._c_jt=document.createElement('div');
		el.ggId="C_jt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._c_jt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._c_jt.onclick=function (e) {
			me._jy_off.style[domTransition]='none';
			me._jy_off.style.visibility=(Number(me._jy_off.style.opacity)>0||!me._jy_off.style.opacity)?'inherit':'hidden';
			me._jy_off.ggVisible=true;
			me._jy_on.style[domTransition]='none';
			me._jy_on.style.visibility='hidden';
			me._jy_on.ggVisible=false;
			me._sy_off.style[domTransition]='none';
			me._sy_off.style.visibility=(Number(me._sy_off.style.opacity)>0||!me._sy_off.style.opacity)?'inherit':'hidden';
			me._sy_off.ggVisible=true;
			me._sy_on.style[domTransition]='none';
			me._sy_on.style.visibility='hidden';
			me._sy_on.ggVisible=false;
			var list=me.findElements("ht_yl",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_fj",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_jy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			var list=me.findElements("ht_sy",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._st_on.style[domTransition]='none';
			me._st_on.style.visibility='hidden';
			me._st_on.ggVisible=false;
			var list=me.findElements("ht_st",true);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._jt_on.ggVisible = !me._jt_on.ggVisible;
			var flag=me._jt_on.ggVisible;
			me._jt_on.style[domTransition]='none';
			me._jt_on.style.visibility=((flag)&&(Number(me._jt_on.style.opacity)>0||!me._jt_on.style.opacity))?'inherit':'hidden';
			var list=me.findElements("ht_jt",true);
			if (list.length>0) {
				var e=list[0];
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
			}
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
			me._jt_off.ggVisible = !me._jt_off.ggVisible;
			var flag=me._jt_off.ggVisible;
			me._jt_off.style[domTransition]='none';
			me._jt_off.style.visibility=((flag)&&(Number(me._jt_off.style.opacity)>0||!me._jt_off.style.opacity))?'inherit':'hidden';
			me._st_off.style[domTransition]='none';
			me._st_off.style.visibility=(Number(me._st_off.style.opacity)>0||!me._st_off.style.opacity)?'inherit':'hidden';
			me._st_off.ggVisible=true;
		}
		me._c_jt.ggUpdatePosition=function (useTransition) {
		}
		el=me._jt_off=document.createElement('div');
		el.ggId="jt_off";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jt_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jt_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
		}
		me._jt_off.appendChild(me._image_14);
		me._c_jt.appendChild(me._jt_off);
		el=me._jt_on=document.createElement('div');
		el.ggId="jt_on";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='border : 0px solid #7d848d;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jt_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._jt_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs=basePath + 'images/image_13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
		}
		me._jt_on.appendChild(me._image_13);
		me._c_jt.appendChild(me._jt_on);
		me._c_menu.appendChild(me._c_jt);
		me.divSkin.appendChild(me._c_menu);
		el=me._container_map=document.createElement('div');
		el.ggId="Container_Map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._container_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._point_unvisited=document.createElement('div');
		els=me._point_unvisited__img=document.createElement('img');
		els.className='ggskin ggskin_point_unvisited';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point_unvisited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point_unvisited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point_unvisited.ggUpdatePosition=function (useTransition) {
		}
		me._container_map.appendChild(me._point_unvisited);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 305px;';
		hs+='left : -60px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -59px;';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 299px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 264px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 276px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_big=document.createElement('div');
		els=me._map_big__img=document.createElement('img');
		els.className='ggskin ggskin_map_big';
		hs=basePath + 'images/map_big.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_big";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 292px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 244px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_big.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_big.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._map_big);
		el=me._point=document.createElement('div');
		el.ggId="Point";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 252px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 114px;';
		hs+='position : absolute;';
		hs+='top : 172px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me.__3.ggActivate=function () {
			me._point3.style[domTransition]='none';
			me._point3.style.visibility=(Number(me._point3.style.opacity)>0||!me._point3.style.opacity)?'inherit':'hidden';
			me._point3.ggVisible=true;
		}
		me.__3.ggDeactivate=function () {
			me._point3.style[domTransition]='none';
			me._point3.style.visibility='hidden';
			me._point3.ggVisible=false;
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._point3=document.createElement('div');
		els=me._point3__img=document.createElement('img');
		els.className='ggskin ggskin_point3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__3.appendChild(me._point3);
		me._point.appendChild(me.__3);
		el=me.__1=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 251px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__1.onclick=function (e) {
			player.openNext('{node1}');
		}
		me.__1.ggActivate=function () {
			me._point1.style[domTransition]='none';
			me._point1.style.visibility=(Number(me._point1.style.opacity)>0||!me._point1.style.opacity)?'inherit':'hidden';
			me._point1.ggVisible=true;
		}
		me.__1.ggDeactivate=function () {
			me._point1.style[domTransition]='none';
			me._point1.style.visibility='hidden';
			me._point1.ggVisible=false;
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._point1=document.createElement('div');
		els=me._point1__img=document.createElement('img');
		els.className='ggskin ggskin_point1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__1.appendChild(me._point1);
		me._point.appendChild(me.__1);
		el=me.__2=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__2.onclick=function (e) {
			player.openNext('{node2}');
		}
		me.__2.ggActivate=function () {
			me._point2.style[domTransition]='none';
			me._point2.style.visibility=(Number(me._point2.style.opacity)>0||!me._point2.style.opacity)?'inherit':'hidden';
			me._point2.ggVisible=true;
		}
		me.__2.ggDeactivate=function () {
			me._point2.style[domTransition]='none';
			me._point2.style.visibility='hidden';
			me._point2.ggVisible=false;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._point2=document.createElement('div');
		els=me._point2__img=document.createElement('img');
		els.className='ggskin ggskin_point2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__2.appendChild(me._point2);
		me._point.appendChild(me.__2);
		el=me.__4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 149px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me.__4.ggActivate=function () {
			me._point41.style[domTransition]='none';
			me._point41.style.visibility=(Number(me._point41.style.opacity)>0||!me._point41.style.opacity)?'inherit':'hidden';
			me._point41.ggVisible=true;
		}
		me.__4.ggDeactivate=function () {
			me._point41.style[domTransition]='none';
			me._point41.style.visibility='hidden';
			me._point41.ggVisible=false;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._point41=document.createElement('div');
		els=me._point41__img=document.createElement('img');
		els.className='ggskin ggskin_point41';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point41.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__4.appendChild(me._point41);
		me._point.appendChild(me.__4);
		el=me.__5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 124px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me.__5.ggActivate=function () {
			me._point40.style[domTransition]='none';
			me._point40.style.visibility=(Number(me._point40.style.opacity)>0||!me._point40.style.opacity)?'inherit':'hidden';
			me._point40.ggVisible=true;
		}
		me.__5.ggDeactivate=function () {
			me._point40.style[domTransition]='none';
			me._point40.style.visibility='hidden';
			me._point40.ggVisible=false;
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._point40=document.createElement('div');
		els=me._point40__img=document.createElement('img');
		els.className='ggskin ggskin_point40';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point40.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__5.appendChild(me._point40);
		me._point.appendChild(me.__5);
		el=me.__6=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='z-index: 0;';
		hs+='height : 0px;';
		hs+='left : 127px;';
		hs+='position : absolute;';
		hs+='top : 97px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me.__6.onclick=function (e) {
			player.openNext('{node6}');
		}
		me.__6.ggActivate=function () {
			me._point4.style[domTransition]='none';
			me._point4.style.visibility=(Number(me._point4.style.opacity)>0||!me._point4.style.opacity)?'inherit':'hidden';
			me._point4.ggVisible=true;
		}
		me.__6.ggDeactivate=function () {
			me._point4.style[domTransition]='none';
			me._point4.style.visibility='hidden';
			me._point4.ggVisible=false;
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._point4=document.createElement('div');
		els=me._point4__img=document.createElement('img');
		els.className='ggskin ggskin_point4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 57px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._point4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__6.appendChild(me._point4);
		me._point.appendChild(me.__6);
		me._container_5.appendChild(me._point);
		me._container_6.appendChild(me._container_5);
		el=me._shou=document.createElement('div');
		els=me._shou__img=document.createElement('img');
		els.className='ggskin ggskin_shou';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAABG0lEQVQ4ja3TPSiGURjG8d8rr1jeQTbKogw2BmVh8pHysciAZCEGycoiVhmUshERxSIWUb6yGpitKDJ4B/IxOE89wxuPj2u5z+k69/W/O6eTer+5lFBl2McTmnGXpCkvYXglzkOtxhnK/wtQgxOU4grXqMApqv4KaMABSgKkDrW4CMCjsP8VoA17yGAXTXjELepxjGIcovGngD5soxDr6EQ25j/6fOgdFIXalRQwiqXgLaAHzznOZdGBZaSxhqHvAFOYC+sZDOM112RBr+gPPdFAk7kAKczHzHFMfBEc1zvGYr3RkKkIUIAVjOANA5hNGB7XNAZDRnTN6XxsoB0v6MbWL8IjLeIBq+hFJs/np7lHyx/DI22iNYAqPgBB5Ty3u/XZrgAAAABJRU5Erk'+
			'Jggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="shou";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._shou.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._shou.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_6.appendChild(me._shou);
		el=me._guanbi=document.createElement('div');
		el.ggId="guanbi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -13px;';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._guanbi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._guanbi.onclick=function (e) {
			me._container_7.style[domTransition]='none';
			me._container_7.style.visibility=(Number(me._container_7.style.opacity)>0||!me._container_7.style.opacity)?'inherit':'hidden';
			me._container_7.ggVisible=true;
			me._container_4.style[domTransition]='none';
			me._container_4.style.visibility='hidden';
			me._container_4.ggVisible=false;
		}
		me._guanbi.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._guanbi);
		me._container_4.appendChild(me._container_6);
		me._container_map.appendChild(me._container_4);
		el=me._container_7=document.createElement('div');
		el.ggId="Container 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -59px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_7.onclick=function (e) {
			me._container_4.style[domTransition]='none';
			me._container_4.style.visibility=(Number(me._container_4.style.opacity)>0||!me._container_4.style.opacity)?'inherit':'hidden';
			me._container_4.ggVisible=true;
			me._container_7.style[domTransition]='none';
			me._container_7.style.visibility='hidden';
			me._container_7.ggVisible=false;
		}
		me._container_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAABMCAYAAACmqiRAAAATFklEQVR4nO3dfVBTZ74H8Gd30pSIIXLAVMON0QSbgLyoC60K4ytS6rSO4LTKwnWd9tJpZyfDTNvduZ3Z6pTtnc64cmess9M7ZnfHnSuXOq7i1tZSL76MK9UqrSAIRA0aWQKNcCAEDEL+uH/gyX04nCQnb3Cs389fvJ1z8sLke57n+T3P87PkyrKzBAAAACTl57P9AAAAAGA6BDQAAIAEIaABAAAkCAENAAAgQQhoAAAACUJAAwAASBACGgAAQIIQ0AAAABKEgAYAAJAgBDQAAIAEIaABAAAkCAENAAAgQQhoAAAACUJAAwAASBACGgAAQIIQ0AAAABKEgAYAAJAgBDQAAIAEIaABAAAkCAENAAAgQQhoAAAACUJAAwAASBACGgAAQIIQ0AAAABKEgA'+
			'YAAJAgBDQAAIAEIaABAAAkCAENAAAgQQhoAAAACUJAAwAASBACGgAAQIIQ0AAAABKEgAYAAJAgBDQAAIAEIaABAAAkCAENAAAgQbLZfgAA0VRdVKLJMy5TE0LIPWefe2etxTYTx8KTy1Jcrnsx1aR+OP5oovX+3cGKuiP2YMdUF5VoEhRznslctCSREEJWHfh9c+wfKTxtENAQEqOKkRUuTU+Y6eueud0+bHWx3mB/l6CY84xhgYYJ5xqRHEsrTctWVhZuNUR6Hn8arTed79WfcETznAVavWJHzhp1uMeLCTVLcbku3PMHc6P7nvtg0yU2nGMzFy1JXMgkKQkhJEmZoCAingshhGx7Ic/3Hptz8plwrw/gDwIaQlK4ND1hz/ay5TN+4eM1zdYn5AMwOV4ZlaD3p/X+3cFAvy9Ny1YmxyufEXOu/lH3RG1HizvtOY2C'+
			'DpxQiQnoSM4vgo2E+f9Bv1ff2245xRxz6PIF5+ur16XGyeUyQggpzFihRkBDtCGgAWLM1ueI+IM7hUlO4MIgmMrCrQaxNwi2Pgdb29Hy1HTPFmj1irTnNAru+yztYiX9+57BAY85J9/32nX86PA0dHd5+OexulhvY2dbz6aslTpCCFm+JFVNCOmM4UOHpxACGiLSyw64H44/mojFuWPZCp1J0RifvFL54fKZej2GRkc8F262BOxCX6BKVKwypmvCvYatz8EG6wkIJpwW+Y6cNepAx+1at9lEf3/yaqMt7TmNmx/khBAS/2ycr5ciTi6XfV5aYXCPeaYNwwx7Hk5Ee0gCng4IaIiI5Xy9LVZdew8++WxjLM47065UfhjxkEAKkzxj4/4D7mFPsC5rc04+E0lAiy3GCiTGXeY+WdrFSjHX4lrTfLY+B0sQ0BAGBDRAjM'+
			'10T0CwFruluFzHBc7DR2NBC+9+qsbGx709bP8w/+dJygTFvPi5CqFjAGYSAhqiKpLWYqhdwcG6fQ0LNAy/FV51vKa5LG/DomChKXQsbf4H75wT+zhPXm2MeLrW+mXZmliEhu3HXneg35tz8hmuKNDW52CjNZ1o/bJszZXHU5RmSw/bPyz0fOgbGEImu6gjqSO45+wL+BoD+IOAhqj6qYwbR1OkXbmEEHJl0ZLEUAKamw4nNPyQOcvBSAgh8+LnSqKVas7JZwozVqjj4+JkG//rD21Cf/Ne/QkHuqhhNiCgAWJspsfSjSpGduytd1ckzlUq+kfd12s7Wvy24LoHHkyrUH6aZGkXK7mxdMxlBqlBQENUVR2vmbEpO0Ldk7d/94fVXMvMX5es0IewUcXILv37f6ylf1Z1vKb5SfzA/uvuX2dwC2988Mprph8c3dfpRV7o'+
			'Xo7Bh6OzMgZ9xdruONN2XdScYzE6fnR4CrR6xcvLliceunzBKWZRG0II2X/udE/R8lxdnFwuK8vbsOhJfL/hpwsBDVE1mx9wpWnZSrrbdI78WVGLdRBCyFur109bRSvcxSf6R92ixiz5wwFixzmHPQ8DTms7ff2qw/zyNoYQQhYyScrPSt80cd23pWnZU6YLnbndPq1Iaib0uQY90f5fMefkM7vWbTbtWrfZ1GrvcvrrsqbR85kNCzRMgVbvt9udHo8PJpQaBQB/ENDwk/HLF9em0N8vZJKUp3abTa8ePhh0AYmtOaunTZFZviRVbVQxd8S2xji1HS1uMYt/8IuRDpz5whaoO1qsqovfOLVJ823cuTN1erWluFxXUXfEnqMz+AJ6aHTEE+pzkzJ6rrI2WT1t3rI/f7p01sFNkfq3/E0aobnMALMBAQ1REY25vpxwKo'+
			'WNKkb2eDWnqecypmtO7TaTQCFtzslnhAqW4uRy2Vur16vFLDIRzvPnt/CrtpdnVLq3hjwmLPR6VdQdsWcuWpLItdK3vZBnONfZyqYkJvmeZ3e/c9aqi4uW5+osMTgn93Uoz62hu8tzxdruGH00NtF4u2NQaFESgNmAgIaomO3q7fc3bknxtxRmsJAuy9uwiJDJebH8c2zNWa0TE9DReP7Rrmz+1eE/tjW8u3cN95yqtpdneB498rUOg02xIoSQxDnxUfuMGBod8XDPL04ul8VyoRExz41G/29YRAY03Y0dSvc3gFgIaHjiGVWMjGs90SHQyw64CZns6vYX0uacfIYL1+a7d5xcRa+tz8FyC1ZUF5VonsSlGq0u1rvv1LE2Ljge3wD4fn+j+17QENMmzY/aDcMXTZft/KU0Y6GXHXDvP3e6h/4Zt5VokjLB93xSmOQE'+
			'oZ4P+m8AZhMCGqKCXxRDV0WPjY97tXsrLxIyddw1WgtfcK3nsfFx7/e2W05uPPHh+KOJA2e+sH266+1cQoRb0lzrudXe5exzDU7pXr5ws8Wx7YU8g5hWtFSLgg42XWKztItt/Nbq2Pi4d6YL+t6rP+G41+8cy9IuVsZiLvYD19BYn2vQs//c6R7+2LrQVqJxcrlstnt+AAJBQENM7MjO9X3wCS2nGC2ladm+dZKb795x8gt8ajta3BuvNvoCapUxXVOg1dsburs81UUlGu4Duq7psoM/9ni06VvnthfyDPPi5yq4Iiuxj6u6qESToJgjuoo8FKEufFJRd8T+YqpJzU29IoSQ273/FBXOhucW+o6JdHMLQh5X+U/eGIS1eIs5J5+h36doLAIDIFUIaIiJ9JRFUf1g9+eDV17zdZkeOPuVfUfOmmmFYnRAnbzaaGvo7v'+
			'IYVYzs9dXrUgmZ7BY/2HSJ5Y89NnR3eVrtXc5MnV5dtDxXV9D0rVNo60EhecZl6li1zsIJJcv5els4Y6TJSpWkunv5G1eIfS2ONn3rvNF9z12YsULNDWP4m4tN/w3AbEJAQ0z8wvC8LyjFjHWGw1JcruNahbY+B9vQ3eXZkbNG8G8/+fJYZ2XhVgP3gf5Z6Zsmrnjqi6bLfj/k65ouOzJ1enWcXC77uKTM2BCltahnWt7StCldypk6vXrP2pfUVRe/CbhYCN3qDvV95Ld2o4HfNW4pLhfcQYqQycfLdeM3dHd5Grq7PPTjoediF2j1Cu7mC1XcIBUIaIg6S3G5jivUCmWs89Rus2n00djE35uvOoPNB96z9qUp+/rWNJ6/H+jv6bnJluJyXaZOryZksvUcaHz5YNMltixvA2tYoGEMCzRMqF3dhExulhFJV2ykFcJG'+
			'FSPLM2Wk8H9esWmL6WjLNdbfXGhzTv6UHoBQx6zFbtMYiSDnt5Egj9lSXK5bvyxbQwghSz/+zWWx1x0aHXmql0iFmYGAhqgqTctW0vNR65uviQ6m5UtS1XFyuSzPlJFS+7iozB+6utjW52DFhgc9Zk0IIZ/W/90a7JiaxvP392wv880npltmTwJ/U9Di5HLZR1u263bWWmxnbrcPk8fLtPaPuicImd7q5tYUP3m10bb/3OkeMoPLukbLAlWigv89dzMppkeBM+AeRkBDzCGgIWpK07KV+3a+sYILg6HREQ9/uos/RhUj444TU1S2/9zpHi5of3eiJmjI0o+P+15ssNOtaEII+e2rr2UE24SCFunWiqEsWcpHT0EjZPI5t96/O8i9dpuyVupKm7OdtR0tbivvtaCHKfhzxK0u1sv/e75It2kUwt+rOdD5hZZEna+aF8'+
			'd9faP7nvtcZyvLjTfn6p9nSICAXpysjvP3O4BYQEBDxIwqRvbRlu06bnoTIZMf6HuOH2kLtJRkCpOcsGftS2pCCFmfnuULAzH751pdrPeKtd3R5xr0iCncMqoYGX3zQIj4YCdkchnOT3e9zRAy2fL84JXXTLUdLdfEHDubWyt+tGW7jn7ONY3n75+53T5M7y9dWbjVwF+atLqoZMr+0/QccbGCbdNYmpatrFhXqHun9s+dYpcc5S+PGuo0Pf4c59qOFnfV47nzq4zpGqOKuePvWLoq/4FraCyU6wKE4+ez/QDgydfw7t41/HDed+pYm1AL81xnq6/FEyeXy8wvb8swv7wtgxsTJoSQnsEBUd2H//PdxR6xY7tWF+ttvnvH1zriqrnFHEvI5Af52Rs/+K5lOV9vE3vsbClNy1bS78sVa7vjYNMl1upivXRhXAqTnGBU'+
			'Mb4QN6oYGb02udAccaFrhfLYqotKNPt2vrEiU6dXf2n+IDfU48NhVDEy+qaD2yjkws0W300EPT2Qj55yFuz14JzabTZxN6EAoUILGiJW33zNzrVqetkB9ydfHuv01/1b29Hi/qW13eGvNdbLDrjFrtoV6sYS79fV3Gl4d6+6h+0fDqdoa+/p4/ZfGJ5XX7jZ4gjWNU637Aq0esX8uUqZ0OO9Uvnhcq7rnL9wi1HFyLQJ854J5UaCPpaegjY2Pu49cPYr33N+r/6EI8+4TJ3CJCf89vO/TNmOcn9xWSodZEJzxPk+3fV2btXoiOd72y3nzlpLwJsXo4qRbc5c6RsXnxc/V7Fv5xsryOd/ET1sEI7CpekJ3Ndj4+Ne7jmf62xluf/fXP3zjL/wpTfgEFvRvsqYrlllTNdUbNriW6wHQCwENESM25ih0XrTKSZcXz18sL'+
			'M0LbsnOV45ZWy1f9Q9EcsPaKuL9VrOnu482nItrHFRq4v17jl+RLBnwB9LcbnONwYcYgB9VvqmKVOnV/eyA+72f9pZMdXtnP3FZan0FKn65mt2ftDXNJ6/z3/NT+02m+ibp1Z7l1NojriQefFzFY/HrQMGtNXFel879J/X/7r71xnczUmcXC6LdUjTNxl0nUNtR4u7ss/BPnANjV3rusUKLW/K38o01G06/a0TDxAI/mkgKkIdC4xlEAcitkrXH7GP25yTz1RsKDLQIVm1vTyj9uMWUVN5zDn5DNftv5BJUi5kkpSbslbquFbqny6ddfhrWVuKy3V0yNr6HKxQjwHdC1Cg1Ss+Likz0ourDI2OeN6p/XPQrTrp7mmx1c1WF+tddeD3zfQNQaxD+sVUk6+rmb94Dv3/KzS3mt7KtJcdcP+UtukE6UJAQ0QKM1aosbDD'+
			'JKOKkb2/cUsKXYDF4br+Qzlfq73LuXThvzB062te/FzFpqyVuk1ZK3Wt9i5nXdPlKd3t1UUlGrqIamh0xPOrw39sC3QdrpVPXydQkR89FksIIRtNmb5QD7V46tXDBztP7TYTOqSFitYiVaDVK8QuuqKMU0z5XDTn5DP0Dc//tv4gamZCgVbv+x/AvGkIBwIaIoIlEf+/GpkudOOMjY9765uv2SvqjthL07KV/NZZCpPsGxelW3UHmy75poDtWfuSen16lpp//kydXp2p06sXJ6s7uaGFe/1OX0AGq6SvLirRbM1ZrePfTAyNjngCdeVn6vRqbk40n9jiKRod0r3sgJu7oeDWMx/2PJy41+8cS5wTL6NbwaGgl4DlL57DvX+2H3vdyjjFtEVdKjYUGehjD12+MK0X5szt9uE91Pc3fvNxruLZZ32fr5g3DeFAQANE6A'+
			'dHt0dozeor1nbHgbNfTRn7DWdlraqL3zirLn7j9NdC//pm85RgX5ys7ty1brPJXyU9IZOtu9dXr0vlj4222rucQtOe6EKqQI42fRvWEML7dTV39heXkffrau5w105JTFLQVeh83HaiYtCtYrqan5DJ94+72eEft0CVqOCP5Qvd8FhdrJfe6pQ+hhBxUwcB+BDQEJGTVxttsVprO5LlLWeS1cV6P/nyWOenu97OHRod8Vy42eI4KrCxRm1Hi3sfb8EPjtAexkLXqag7Yid1R+xc67e73+nmX+e9+hOOr282Dwaq/m7o7vLQ1fdDoyOe/77YYPM3Rl/b0eJe+vXJtn9dW2AQmtPdyw64//bdP6YVoolldbFe/l7d7T333ZuyVvo95m/f/UN0Jf7OWovtc1JBNmWt1F3rujWlSNDqYr22PgfL39yk1d7lfPXwwc7qopLh'+
			'Xes2m3rZAXeg6v89x4+0VRZuNfDP08sOuPeePo5dtyBkP0uuLDs72w8CnhwFWr2C7i4UCqJoobuDxV6H3qBh2PNwQuyUrUiPJWSyqzRYcZPQNpTDnocThy5fcIZTeERv8hCOU7vNplt9PcOhPteZwBWu8X/+wDU0dqbtujOc5Vb9LedZoNUr0p7T+G48+NXt1UUlmia7zT1bxY3wdEJAAwAASBBWEgMAAJAgBDQAAIAEIaABAAAkCAENAAAgQQhoAAAACfo/UHcGub2VEucAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_7.appendChild(me._image_1);
		el=me._kai=document.createElement('div');
		els=me._kai__img=document.createElement('img');
		els.className='ggskin ggskin_kai';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAABKUlEQVQ4ja3TvyvFYRTH8df9ioFBFAODxcTfYBADslB+lciilEFWsrBKBmKRkMRASn4u/gAbg7qDgXRLBgOiXMN91KXruuEsT6dzPu/P6TzPE0smLs5RgS4c+59owCZuI8RRgj10/AO8HfsoRTwK0FXkYwODf4APYCuw1tEZ4RX9mEWERYz/Aj6KpcCYQy9eolBMYgQTIZ/EDGI5wqcwnaYdDkzRl8ZJDOEtGC4jLws4D/MYC3n6kDIZwAJ6pFbXhx0UZugrwFraQB9r/hSZDEg9sVY8hfMAxWn1QmyjG89ow0om0HcGcIR63KMOpygPRodowQOasfsdJJZMXGTxALUBWIkrPKIGd2jCWTZxLgZQhRNUh/xG6rde/iTM1QDKpO6iCI24zkX0Dqs9Q9'+
			'2Wg2NHAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="kai";
		el.ggDx=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kai.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._kai.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_7.appendChild(me._kai);
		me._container_map.appendChild(me._container_7);
		me.divSkin.appendChild(me._container_map);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 57px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 14px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_3);
		me.divSkin.appendChild(me._container_1);
		el=me._btn=document.createElement('div');
		el.ggId="btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 800px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._j1=document.createElement('div');
		el.ggId="j1";
		el.ggDx=-400;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_17=document.createElement('div');
		els=me._on_17__img=document.createElement('img');
		els.className='ggskin ggskin_on_17';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAsCAYAAACKTjG2AAAKW0lEQVR4nO2dfVAT6RnAn12IITF8LIsIXCIpIHqWaw1FMlwF6wc3scCMo2CvU1Cv9Jg7Lbb+4ecwXLXMVXCc6ehgb7zxbvxg7Ah0OoNnM1qLBeYcPkaulfoFckiiQUwIHzFkJ2S3f2Q3LjEJIZtEjfubyezuu+8+77vss8/7PM+77CK2P+6ggKIApSgAoAAo+gcUAL2YVU6BHfY6UI5DSACgSHpJsZb0OknvY2/bAMBGAZAUAiS9bqMQIEmAGbCv22gZM4C82E8BzFAANrpshkKApBCHvBlHndnlNocMYJXTbQAACQjdT/s+irL3kaQQoOi+U4DQy9ABgfmfTziJopBa/+1AIDrEE9oUKNakoTYEfdX94HmDQUkk7FX3gecNBp1BeQvE4zuoDeUtEI'+
			'/voDP8EMbDAX4I4+EEb4F4OIGSvA/EwwHU+hblgZSZqYLKcpVELsM5nzQjS5mZKvBH3+aLXIajr6ptNuGvexTGXOzFi2LCAAA6bz20+ipr+9b1Uaq1WRgAjJw8ozZx6RcjS93aY+y89dDgzTGV5SpJy9Vu85DGQHJpGwCg6ctDMrOFIPM2HdJwlcWF8JkgWCC5DEeLPlgldrXv3aVLhOztlOQEoVgU4dBqaWKcY7+3F6usOFccE70Q5aok/kIuw9Eje38Vt1qZEVWwIdus+uWRJ1xldn1336Ram4XVVpVi+2suGP3RT18IJ4OgQEUfrBLvqdic4MuxWp2eYNafjBi8sj4fl27EpYlxwpar3YOu7nZpYpygslwlcXXs+MRz8nxTu9mXvrqislwl2V6Sj8dikYIx45S1obl1fK5jyopzxR+XbsS9kV+Yr8Rysla4PBeG'+
			'QFqp8GBEYSfPqE0FG7LNg49GCOd9d/uHCWlinKCkKA/X6vTE3iNnRp4+G7cx+/1h7p0pKcpze3G0Oj3hDwUqzFcIf/vrIjw9RSoGAOjo7JusPtag9+Z8YqIXotLEOOGYccpqthBu67NvrldFOIkgQWnIk9lmWwMuPo63NLa0GbQ6vct2xieec1LYynKV5Gfv/0iiyEiTAAA8GNSaG5pbx31Ryq7v7pt2HjjtGLLVF6uTADz/LYNNuO0tzANpdXqrP/0juQxHP92+MTona4WE8dkeDGrN3/yza9If7TCBxOCjEUK1NgtzdsYry1USZ1+S4eyl65OBvCnDqeAYoJCnMF+JiSKEqD8VB8CuPP9q+lMKu2xPxeaEPRWbQavTE3mbDmneXbpEqFqbhbGHNHGEEI3FIgV3+4eJgCpQsIawQOIuynMuW7woRgDg2Ylm6Ort9/'+
			'oPP6QxkF+c+2b0++Gn1svXegPil/T2DZhufPtfh1KWFOVhznW2VR5/zFgl9cXqJJFoQVjL1W6/BQSuCLc/yBhY5pO486ausyPqLspzF/l5cqIZnFMGysxUwfat66OY7ZTkBCGzPHW0AgewpyR+vn6VR8Vkc7d/mPDWUj19Nj5r2HWlQAyV5SpJeopUrG7tMQYiCGETHkjhAACnjlbgdPJuTqSJcUJnc+2KdcUHZ4Xn9F024oV8QWJ8rODB4GPLxJRnZ7mrt3+WJclWLBW6Oo/0FKmYibR8wAgAXilQ9splkra/f+5oB8ciBQbjlEsLWbAhO2raQpB19c0Bzw8FXIGmTGbSm3BTmhgnnLYQpLs/Chvnu2pIYyBd3cnKzFQBexg6dbQCX63MiOr+zwPzfH0UZyVlIi3noYUpV7f2GO/2D3s8b2cl9YTeOGFlp0GyVy5z'+
			'aekY69PY0mYItPUBCIIC0VlSj3dCZblKsqdic4LBOGX1V9Lr3Ind8T/58VLJ/pqvHnvrl5QV54rdhdvOSspEPc5Dy/fDT62KmjRJxnK5mB2Cc2Xw0QjBlse2RmzcRWOBIiRnUs+d2B2/WpkRZTBOWfvuDXvlCNdWlWKH95YlnTuxO55L25ev9RIdnX2T0sQ4h2/kK2wLxvhazE8cIXR57XYeOG3o6OybLCnKw6t+vyXKVR1/EnIKxCiPVqcn2FGJJ2qrSjHGsdaNjnEOeauPNeinLQTJ5Gy4ygOw+1qqtVkY84vFIt3OxFcfa9CPGaesm1Tve+V7ciFkFEguw9H5Ko9chqPNZ/YllBTl4dMWgmxsaTP4Y2KSCesBAD7ZVhBfVpw7LydbmhgnAJidFVe39hjXFR8cXFd8cLCxpc3Q2NJmuNlzx6UfN6QxkNc7eidjsc'+
			'g50xWcQILgAwWLL+p2JaSnSMXezjnVVpViTPJPq9MTdfWNo/7K4chlOHryjNokTYwzlBTl4Yf3liVlLE/2WjnTfpAkBABo77xjYZcPaQxkYb5CWJivxO4NaMxbyuvcRp7MVA3tEwXkqYRwoELHAjU0t453dPZNbtt9YtSd8ly53m3q7RswfbKtIL6kKA8XRQhRdWuPcVvlca8dbU/UVpViPerjyft2bcEA7AFEY0ubAcCee1JfrE4qzFfM6eQmv7NYqNXpCVfncflaL6F58syiyEiT1FaVzhqiMpYvEchlOCqX4ShjxaZM5oBFYuGhZIHON7Wb3UVQZcW54vw8hWRFerKI8R16+wZMX//1mpGr4ixeFCM4dbQCX5PzXrSIdmzZF21/zQVj371HxO9+s2lReopUfKLmU/FHH9pDf1ephLLiXHEsFinoar0/y1pJxBFh'+
			'tVWl2PrViijm0ZDCfCX2tys3HTI++jAfYyZxAQCmLQT5l7P/mOByfp4QoFToKBCbwnyFcOUPU4TpKe9EsJVm2kKQHZ19k5da2ie4Ko5EbH/ojblg0xaCVLf2GK9c7zY5yz7f1G5u77yj2bdrC7Ym571oRUaaRJGRJnH1cNmmjTlRAAA3e+5OAwDkKldEAACsVmZEAdgV/w/HL4xg0ZKww3vLknbtKMBMZosNAKD39kPzQnEEKhZFhPXdGzKfvXR9MpC5IAGEiAIpM1MFu3YUYPIlCUIcixSIWCHumHHK2ts3YOq9/dBc8+fmSX+1KV9in8qYthDkv2/enqirb/Y4bTCkMZA7D5w2KDNTJ7dvXR+VvXKZ5LNjDc9myZTh6PI0mfjBoPYla6rV6YnGljYj22olS+NHLzTfMDFD5oXmGyZ/nuNcCF8XCzQ+8ZzU6vTE0P'+
			'DLD5x5Q+eth9b6z5NFItGCMINxyjo03E/oRses7Z3/MwdqcrOuvnF0a1FutLcPibH7Ss+xvZRkHNIYyP01Xz1ml51vajfHRC8ccfUsdTCVxRULUAqQm1/WUr/47Gv+9S5vOHIZjgZj6oLNnp/mpIVMFPa2E2zlAQAQIiEUxvMEnwiUVyAeDgh5BeLhQgRK8grE4zv8EMbDCX4I4+GEiFcgHi7wFoiHE8IwOhP9qjviKyTpe9ft/8xEAUJRgAAAQr+j3b5NAUrvA7C/xZ+pg1DMPgAUSHt9igKU3rbXB0Ap0i6HkUdRgFAkoPRb/1G6HkKREIYg9voUAAL0kj7eLh9e9IP9RQEA1hcEmG2wfyqA9RUBIAEAoZd0FZJ8cbjjywH0m/eZddLxNv8XdWyOcvtXBZAlSct9vgivAaHyf9m2uau8nvwfUOdaxOUV4fIAAAAA'+
			'SUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_17.onmouseout=function (e) {
			me.elementMouseDown['on_17']=false;
		}
		me._on_17.onmousedown=function (e) {
			me.elementMouseDown['on_17']=true;
		}
		me._on_17.onmouseup=function (e) {
			me.elementMouseDown['on_17']=false;
		}
		me._on_17.ontouchend=function (e) {
			me.elementMouseDown['on_17']=false;
		}
		me._on_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j1.appendChild(me._on_17);
		el=me._off_17=document.createElement('div');
		els=me._off_17__img=document.createElement('img');
		els.className='ggskin ggskin_off_17';
		hs=basePath + 'images/off_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u5343\u6b65\u957f\u5eca"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_17.style[domTransition]='';
				if (me._off_17.ggCurrentLogicStateVisible == 0) {
					me._off_17.style.visibility=(Number(me._off_17.style.opacity)>0||!me._off_17.style.opacity)?'inherit':'hidden';
					me._off_17.ggVisible=true;
				}
				else {
					me._off_17.style.visibility="hidden";
					me._off_17.ggVisible=false;
				}
			}
		}
		me._off_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j1.appendChild(me._off_17);
		me._btn.appendChild(me._j1);
		el=me._j2=document.createElement('div');
		el.ggId="j2";
		el.ggDx=-300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_16=document.createElement('div');
		els=me._on_16__img=document.createElement('img');
		els.className='ggskin ggskin_on_16';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_16.onmouseout=function (e) {
			me.elementMouseDown['on_16']=false;
		}
		me._on_16.onmousedown=function (e) {
			me.elementMouseDown['on_16']=true;
		}
		me._on_16.onmouseup=function (e) {
			me.elementMouseDown['on_16']=false;
		}
		me._on_16.ontouchend=function (e) {
			me.elementMouseDown['on_16']=false;
		}
		me._on_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j2.appendChild(me._on_16);
		el=me._off_16=document.createElement('div');
		els=me._off_16__img=document.createElement('img');
		els.className='ggskin ggskin_off_16';
		hs=basePath + 'images/off_16.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u6c34\u4e0a\u68ee\u6797"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_16.style[domTransition]='';
				if (me._off_16.ggCurrentLogicStateVisible == 0) {
					me._off_16.style.visibility=(Number(me._off_16.style.opacity)>0||!me._off_16.style.opacity)?'inherit':'hidden';
					me._off_16.ggVisible=true;
				}
				else {
					me._off_16.style.visibility="hidden";
					me._off_16.ggVisible=false;
				}
			}
		}
		me._off_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j2.appendChild(me._off_16);
		me._btn.appendChild(me._j2);
		el=me._j3=document.createElement('div');
		el.ggId="j3";
		el.ggDx=-200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_15=document.createElement('div');
		els=me._on_15__img=document.createElement('img');
		els.className='ggskin ggskin_on_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAsCAYAAACKTjG2AAAMgElEQVR4nO2dfVATZxrAn13IJY0LNiylgAmmQKnaXGscaIYe0HpOetHCXAdJr04BrzJlqhxMHcaPczLWWkZFx+kdjHqjRx0pjp2CHWfgKmem6kGnTlrOeC1azw+KJAqFxICkCbmY3ftj8+KyJiEJJNjO/mYYNrvv7j6777PP1/smi3k+WEtjNADQFGA0AAANQNMANDD/wbsMPtbRwOBtT8HUXSnvMkUB0Bjz3wPMevTnYU4N99F6APBQGHhoAA94/9MAFGBwn2a2UQDgob2fAa1DnzHweI/noTHmHN62aD/Uhr0PIw/GyDcpIzZ5bgpooGiMuR4aA4qmAYCR5dEEgwcdFDliKSwGMg59dSPiZ+L5xfGq8qVM3IPjcy0Hz88Y3IPHzLUMPD9jcA/GKx'+
			'BP+PAujGdG4Pd5C8QzA/gYiGdG4Pcx3oXxhA9+n7dAPDPgkXRh1RUaoqwkXzzbx63XlUrkMnJWTK5qWYZAtSxDMBvHCpZCtVLoT5ZoysEm1g2Rd2H1ulJJt+Gyo0NvdE3XVi4j8Y2VxcnmQYvr47Zux2zJUF2hIbRFBWQcIcY3bD1snenx3t/05hNZ6VLxmvX1twwXb7rlMhIveiUnKKUfHfuJCvXa6nWlEm1RAZmv6rJuqWuxofW6d1fHr1vzu6TOcz222biuUImNtAWSy0i8UK2SFKpVEoCPbgejROGeZ7oOvGsbd7+U++v51RWagDK0n/nG0W+y+h3mKivJF2elS8XG3ht2w8WbbgCAoldyxBsri5ODkTXUhwMpj3PCRXUbLk/ZT991yZmnetahWZ4t6TolFx9pOW2dzQdvOmI9EQ6i+01WakvdR7frdesW1OvW'+
			'LWArUVlJvvjx+fP8ClBdoSG46742XnehTmMTSgcG0W6osanT7m/jaytz4wEAjn6in7QE7We+cQDA0CycewrNDTVJeSpFvHnQ4iqv3n+bq9iGizfdmjU779TrSiWFapXk/U1lqbnZi6NmjTDjoQ/o339wPOKDqYVqpZBRIIAtdYwSdZ3aJZOmJPr06/4IZKpRfPPkE4/H7NtekQwAsGln09CPI6MeX+3zVUtEW6tfT7baxt3sdoGsT6FaKWyoWy/70tB7r7ymYTgU2eUyEj/btjv9Wp/ZoVmz806gtmUl+eK3S1eS0pREobH3hr12R9MwWy65jMS5chaqlcLNVdokaUqi0Dxoce090DocKYsPwAymxnpwLFLHn0KH3ujKVxlsudlLiN6rA24AgCMtp62+LBCKgVrbu2zcbV8br/u9IeiG9pusVGt7l+2d8leTDuzakJ'+
			'qtqb3FbVuoVgq3Vr+eDACw90DrsC+r5ou33lBLnBMuavu+4xYAgM4T21MBAN7bd3wEKe109N0aCtipB/dUkprl2RIA3w8M2yoVvLbNhNZ36I2uDr3RhLbX69YtWPrseUvdX07eC0aucIilo1gH8gZ/k0rhy1d7g2gAAAjkRtjU60oludlLHnJ3Tuf/PAAAXad2yXzt95hIiN+1jbs3V2mTNldpp2y70HPFzg5WARiXqlRkEp3nemz9JitVXaEhuLHQTJHLSPyFpc8Qd23j7r/+/dQI9x7V60oleSpF/F3buFuakihsbqhJ4lrC8pqGYd27qyfyVM8SLSfPB3UPwyWWguhYoEhiHrS4e6/2hxw4BtrHPGiZohByGYmv1apJxjWctMllJK4tKpA4J1zU3gMnrQAAbGvgi+oKDTFdDNRvslJV2w7e+XFk1MN1USiYRpYH'+
			'WZrmhhrgKhFjdSJneRCxVIQtUHNDTZI8LXkyzkFZAnc9F1ISJ/BnObjWwWup7ADTB+aB8BegAzBBeoIkTpAAcXC2bXc6Wt95rscG4Dvg5yJNSZys16D2vqysLxmQW0PBNADA9n3HLc2NtUKkRNv3HbcEit8iQWw0TyZNSRQG07nmQUvYgR8KPMPZt/Ncj81w8abPAL2xqdOe83zWPbtjwkOIRTHIjWzYetjKjlmCQbM8W6JZng0AAO1nvukL1OlyGYnv31GRpFRkEtxMrN9kpcqr99/euenNxDyVIr65sVbY2t5lC9b1zwYRVyBkWrnmO9gM5uCeSnLc7qC48ch0/Lbkz32htGdbFX8gmZsbapIAAI616q0AAMc+/eLe99cHfCr9xsriZGPvDfv5r7712amBlAel5o+JhLi/rK/fZKXKaxqGD+6p9GiWZ0s2VhYnv/'+
			'zic/ajn+htkczAEFG1QKEil5E4MtvACr6DYXPV6qAtQiiUleSL81SKeGPvDTt60g0Xb7qLV+USmU+lCtnpNkoI5olFONsqFKqVwlUrcgh/5Yh6XalkRZ4yPkESJ3BOuKiPTvxzeLpMasPWw9ayku+db5euJJWKTEJZl0n8aZ3Z8Z/Lfc5Dx06PRcq1zZkCVVdoiMVPpwXlasQiIX5wTyWJPn9/fcA1nZlWLJLP+lgaAOMinRMuqnZH00PWQKnIJJobawXcgl9WulRcqFYKO/RGF7seplqWcY8d78hlJN7cWLsAueC7tnH3lWu3nKnJpIB9/YHovdrvGLGOuhcueFKYlS4VAwD0m6whPXyhMGcKtPjpNGGwcUOCJE7AaWsDb9DsD19VW3+gAt907ZobapKkKYnCa31mx85NbybK05KFpCRO0KE32JCL1RYVkH/bW5XM'+
			'LRS+9YZaAgA2djGVGyz3m6zUhZ4r9synUt1HP9HbVq3IIUKJrRCd53psqyv2DuneXR2v77rkDHX/UJgzBdqw9bBVLjtpAwBQLEoToOIil7Ntu9PZmQdA4LgB0dxYu2D2pGVYkrXwMQDGomSlS8E8aHGZ7oxMfPb5BTvAZJ0Lug2XHWUl+eJuw5UJAADnhItSKjKJRTqZmGnnf0yQHeutWpFDAAB8ePizIe9QSUC4wzmRLCAi5jQG6jdZqc4T21NlqU+IfN1U9tSLUH24rxrPC0ufIb6+9F+fliuYzO2LL433zIMW9w8DP7p7rw64fcm0pa7FhrKy1vYuKwDAvy58N/bC0meIBEmcoEZ3yBROcBvt9DxY5kSB0DhPwWvbTMdPnht9f1NZ6uYqbVLv1YGg3Y4v6nWlkjPn/z02Nv4TNTr2E/V26UoS1Z0O7qkkEyRxAk'+
			'IsivGVzVRXDLikKYkCFKv4Ov50mWB1hYZYq1WTCZI4wbU+s6PbcNmhLSogAZiMbWNlcfJsXOejQixGR1+BXn7xOUKpyCScEy5KtSxD8HFbt0OxaKHVX+wQLGUl+WJtUQGJ0t3qCg3Brjtt2HrY2tzA1G/YlduuU7tkI9ZRd+2OpuF/tOyQBzPtBE0dWfx0mlCxSC72xi1CdF0oa2Jb0MamTrs0JdGqLSog245skx1r1VujWa+JBLFYFC0QqsKighh7AHNLXYstJSlBoO8yhn1D0RSLT9u7x/y1Ka9pGG5uqJlsI5eROHJd7GknO2pLk3uvDpjYVkK1LENQ9cdXJfK0ZCHb3aGip1KRSfgaNWfDDrQ3VhYn5zyfFdSIvjQlURBqpTsaCKJpgZgnG+Ban9nxzuYDQ9ybXF7TMKxaliFgB5/BzvArVCuFqAO5liPn+Syx'+
			'XPYgAEWj6HIZiaNa0YWeK3aABzMGtEUF5Oaq1RJ2nSYrPVWAqs/G3ht243c3HfquS070EHQbLjtQIoAsz/q1K+dzZd1S12IzD1rc2qICSSBlZ4Pc4KPGr6KpQB16ZipHIBdVvCqX8HWzUAcH4lqf2cGe4NXY1GnXFhW48lSK+LNtu+P97WcetLgOHTs92ZGog7nu5eO2bodtzO43AO7QG12qZRmCE4e2LORu41apG5s67aG4r9b2Lit3cNcX0pREQTSVTYBHUYG4Uzl88dnnF+xxhBgHACDEoph580T4jR/uuKYLXr3zYB5SzPLq/bfXr105Hx2Ty50hq7vl5Hk71xr669zpsifDxZtu9jjeiHXUff6rb0NSFjbjdgdlHrS4eq/eCmoKbFlJvjg32+IatzuiEqALcRqwC0fq6T+8d5T/eReekNn4m9xM/luFPGEjxO'+
			'gofKeH5xeLKIZXIJ4ZwFsgnhkhiqF4BeIJHxHOWyCeGSDiXRjPTBDyQTTPTOBdGM+MEKFK9FwLEi4UFZ7ozO/NYwA07f1aJfP1ShxoZhsNgHu3YUADRtOT/3EaAMMoZpm9DpiMBKMp5jNNTW7HgGaON7nMvBWA2U5BDGCTyw/OxTo3zYxM4DT9QGaaZn7in/0WAfZbBh5axrxvGeC8TQCYw6C3DEx5gwD7Mz31LQPoLQJYWuqisDrhEeHR+3Ws8PD54w8/B/4PJxTxExZr/44AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_15.onmouseout=function (e) {
			me.elementMouseDown['on_15']=false;
		}
		me._on_15.onmousedown=function (e) {
			me.elementMouseDown['on_15']=true;
		}
		me._on_15.onmouseup=function (e) {
			me.elementMouseDown['on_15']=false;
		}
		me._on_15.ontouchend=function (e) {
			me.elementMouseDown['on_15']=false;
		}
		me._on_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j3.appendChild(me._on_15);
		el=me._off_15=document.createElement('div');
		els=me._off_15__img=document.createElement('img');
		els.className='ggskin ggskin_off_15';
		hs=basePath + 'images/off_15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u68ee\u6797\u7eff\u8c37"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_15.style[domTransition]='';
				if (me._off_15.ggCurrentLogicStateVisible == 0) {
					me._off_15.style.visibility=(Number(me._off_15.style.opacity)>0||!me._off_15.style.opacity)?'inherit':'hidden';
					me._off_15.ggVisible=true;
				}
				else {
					me._off_15.style.visibility="hidden";
					me._off_15.ggVisible=false;
				}
			}
		}
		me._off_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j3.appendChild(me._off_15);
		me._btn.appendChild(me._j3);
		el=me._j4=document.createElement('div');
		el.ggId="j4";
		el.ggDx=-100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_14=document.createElement('div');
		els=me._on_14__img=document.createElement('img');
		els.className='ggskin ggskin_on_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_14.onmouseout=function (e) {
			me.elementMouseDown['on_14']=false;
		}
		me._on_14.onmousedown=function (e) {
			me.elementMouseDown['on_14']=true;
		}
		me._on_14.onmouseup=function (e) {
			me.elementMouseDown['on_14']=false;
		}
		me._on_14.ontouchend=function (e) {
			me.elementMouseDown['on_14']=false;
		}
		me._on_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j4.appendChild(me._on_14);
		el=me._off_14=document.createElement('div');
		els=me._off_14__img=document.createElement('img');
		els.className='ggskin ggskin_off_14';
		hs=basePath + 'images/off_14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u7532\u677f\u5ba2\u5385"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_14.style[domTransition]='';
				if (me._off_14.ggCurrentLogicStateVisible == 0) {
					me._off_14.style.visibility=(Number(me._off_14.style.opacity)>0||!me._off_14.style.opacity)?'inherit':'hidden';
					me._off_14.ggVisible=true;
				}
				else {
					me._off_14.style.visibility="hidden";
					me._off_14.ggVisible=false;
				}
			}
		}
		me._off_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j4.appendChild(me._off_14);
		me._btn.appendChild(me._j4);
		el=me._j5=document.createElement('div');
		el.ggId="j5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_13=document.createElement('div');
		els=me._on_13__img=document.createElement('img');
		els.className='ggskin ggskin_on_13';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_13.onmouseout=function (e) {
			me.elementMouseDown['on_13']=false;
		}
		me._on_13.onmousedown=function (e) {
			me.elementMouseDown['on_13']=true;
		}
		me._on_13.onmouseup=function (e) {
			me.elementMouseDown['on_13']=false;
		}
		me._on_13.ontouchend=function (e) {
			me.elementMouseDown['on_13']=false;
		}
		me._on_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j5.appendChild(me._on_13);
		el=me._off_13=document.createElement('div');
		els=me._off_13__img=document.createElement('img');
		els.className='ggskin ggskin_off_13';
		hs=basePath + 'images/off_13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u6c34\u4e0a\u5361\u5ea7"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_13.style[domTransition]='';
				if (me._off_13.ggCurrentLogicStateVisible == 0) {
					me._off_13.style.visibility=(Number(me._off_13.style.opacity)>0||!me._off_13.style.opacity)?'inherit':'hidden';
					me._off_13.ggVisible=true;
				}
				else {
					me._off_13.style.visibility="hidden";
					me._off_13.ggVisible=false;
				}
			}
		}
		me._off_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j5.appendChild(me._off_13);
		me._btn.appendChild(me._j5);
		el=me._j6=document.createElement('div');
		el.ggId="j6";
		el.ggDx=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_12=document.createElement('div');
		els=me._on_12__img=document.createElement('img');
		els.className='ggskin ggskin_on_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAsCAYAAACKTjG2AAALNUlEQVR4nO2df1ATVx7Av7sktyENP0Lkh0gwjUC10GoqmtGDVM/B4mFmOgredArWkSvTqYdXp2P1Okx/OEwrOp1rdfRm6tlelc7dKHScwbacnK0DTJ0UT9q5qAwWLoYICITwIyZkQt7eH7sP17AJIZEEuf38k/fy3r59vP3m++stu4Tn0C6aABqApoH5BAAaAUyVmbYpaM73nDpNAwABgBDTjGhmCEQDILYb4tQ9bNnD1pky8eB7YMoehPsTMEkDIJoAD3u8hyZgEghACGASHhyPPyeBAA9NMMcjps4dG7FjeoAp4zbE1j00DYgm2fnTzPfsGDQQgGgaaCBgziGYtZyPiBBJwrKTP/wS6YkIPH4UaZ7PID0kGel5CDzGkB5CECCB4CE9pCjScxB4jB'+
			'FMmEBIkJNEVKTnIPAYQ04KGkggBEgPKWgggeARTJhASMwbDaRSKsiqN7bHPoqxyorzpY9inGCoLC+UbS3QUJE6f7gRuYkwpOID4KP3ypM0ORkyAIDqj+vHgh1na4GGen9/Weq63BW21w9+alUpFbxOnqnHivy1BXPusuJ86b6KbSmWviGXscN8N9hxML7mN1tCnYc/RJ4wmjB/C/L5P5psmuoM2YuF6+W19Vfs/sbxtyCrstUUAMCt22bXycMVisKNuXK+fp/9/Z8Du196IYmv7c+fftV//HSj3znwcbauxVGg04zlaXNiD+1/edHOvccGZjsGpvnCB8q0xYseiSb7TfGfuudKiEQoTJnoQBckQR4j/q7uQ7W/Pv4WRPPMMikAQMOlNseKzHQKgBEI3L5h/bMyTU6GrKn5J+fo+P1+7rFpixeJS/Q6ha/zlhXnS18t'+
			'3eKznYsqPYVqvvCB0l8f3Ytv98w0jqVvyBXI+fyxYDQQAEDj99ds3LpMKomyOyY8vvrztftbkKVLkqnObouD26fhUttUHQvVvcERj7eWqSwvlPmbe3zcE2Ta4kXUTBd1pnaFPEYcLaFIlVJBznRxd1Z+FLIpnEtEk2R4faAjJ+pteEEqywtl+yq2pfgyGVhrBaqCy4rzpQnyGPHl1vagfahAON/QbMPzVSkVZN2pt5WOCRcKRKMA4L+LWhCOtoiG8CYSc5ani/Wb14gBGJOBP/39+vWb1zwUVfnyTwp0GhkAgKVvyP3oZuwblVJBnjn+5pIEeYx4qHvUcfJwxYzm7fWDn1rDMbdwIQr3bvwOfX5cnjbnoXDdn98BALCvYlsKt95wqY1XI61emckrhGeOv7kEl6USigRghLJEr+N1sH3RcKnNAQD9DZfaHFh4sF+XpU'+
			'6TZqnTZkwfqJT1tlO131rj456Y0XwFO09vAtWMwSCCMIfx5xpaRtt+7nQAPHBazzc0W/m0RoleJ09bvIjiOsEA/D5QTVWpPJoVDm+MHSYHLquXplAJ8hjxf8333NzvAQCSE+PF/hx9U48VHT/daOcKj3PChQAADh8/199iuDnhfUxyYnzU+/tfTsxSp0lbDcYxU48VmXpaHNNH5ycuhvG7Au3PRyC+VrCIwn2npLHD7L7Y1O4CeOC0WvqG3HxmCf/yuE6wLzblaWKdEy7EJ0Rcv0v73DLxWk0mdbGp3YXngVEpFaR+8xo7q2l4qSwvlL22sygpWkKR5xuarS2GG46aqt1LDlbuSImP+3qA+3dUlhfKXikpUCTIY8SN31+zBWO+auuv2P2lNb6r+1Bt6Rty7az86K6vPnMahc3VwLOhRK+T86lphTxGHMjxNVWlcnyR'+
			'fOV9MIbrXW7D9S73TP4Kn0CrlArytZ1FSQAA7x4923u2jtEkg9aPe46+U56yr2Jbyob1z9rb/9PlyNNmy7LUadJh27g72LwSxpcAcPNqkYrU5oUADVpH3PcGR6aZsLWrnpL5MktcVmarozu7LY5bt82uwo2509q5PhAAwNVrN+1rVz0lS5DHiL1DbtZc2ABg2gU39VjRgerP7ho7zG7uBTNc73Kfqv3W+sffv5ioycmQ4Yz6sG3c/clfLwxiQVuIRFSAfmy/7Wr8/prti3OXxwzXu6YJUFlxvjMQZ7PVcMM+On5/Vr/AC40/2Ha/9ELS/kOn+/G5cVqht9/qM4ozdpjdOJJckZlOqZemUMrURAkW9M5ui6P7Tr8rZ7lKmrZ4EfX+/rLUg5U7kNU27jaZ+104p9Xbb3WPjt9H/jSTc8KF5nMOCIgwC9CwbdwNAOBtPl'+
			'7ZsSn2lR2bfB538nAFdeu22eVrsfHema9UAF8yDm94bvvtOpnhepcNAGDNyiwpAEBT809O7zGq3tgeu3nD6jhvh9Y54UI9vYMTP9/odrYYbjg4fpV1a4GGytdmSzOeTKUSFfFi7+iTTarymspAEpYRhw6TAHEXxNRjRTnLVVIAxlw4J1zIygoWHzhrCz7MSrBcbGp3vbVnyLUyWx3Njg1PZy2N7uy2OPi0YW39FXueNluGNUxvv9V9xzIw6R15cf0SY4fZbewwj+J6cmJ8VJY6VcxmtMV/+eLbUXjMCYsAJSfGRwEAOJyM+sZ5iTPH9iblaXNir14z2A9U19q8j6upKpWX6HUKS9+Q68iJ+mntgfLWnu0POdbjdgc6UF1ru3rtpr1Er1OUFedLc5YvpRLkMeIvzjfxRkqmHisqfOlQL64Hu9kZiEONE6cmc//81kAQ'+
			'JgEq0K2KBgDovvPwguzce2zgzLG9UKLXKWJkUhKHuSqlgsS3d7Qbf7G/+d7pgVB8AazxMPjCHKiutW3K08S+WrpFoZDHiNuNv9hnGy1556h8MdNGrXdfAIC+geGwZNSDRUTQ4RGgLPUSCQBzi4V3Gxaiwo258uYLKqmxw+R4ft0zcdESigw2dzLtHH42JC+3to/hC3vkRP2szxVIjgpg5o1aLqxZhRbDjXkdvYnC5USvXpkpc064fEYc5xpaRpMS40VZ6jQpNgs4OpvLeZUV50s35WmmHNs9u4rk9wa/HIpk5LO1QENlqdOklr6haYnO+YY4HBoIbzG0GoxTwsBmfKUrMtMpHO4CMCHwwODI5OqVmbLCjbnywo25cubuPpPj1m2za2T0Pmox3JwI9QJrn1sm3rOrSJ6nzYl1TrjQu0fP9hboNLI8bU5s3am3oy+3to'+
			'/x+WR8ePtXvkhOjA8oKfqH3XoFAJOr4pv3Wk3mlN+Fo8ZI8SsyDAKEtxhO/O1rW01VqXxd7tMyrvM5bBt3txqMY+caWkY5v7iBqje2x+Zps2XK1EQJK0wAwITNRaXvmYIRIq5vBQDA9a/O1rU4aqpK3VsLtPISvU6R8WQqtb38yIz+zUyZ79miTE2UDNvG3XwCfG9wxOO9sQwAcOnKvyMSzYnDYcIuNP5gS01RiA3Xu9xrNZluqYQiO7stjp9vdDuNHXdcvrK0TG6Hye/gKGlxUoK4b2DYHawGMvVY0b3BEXdnt8Xx9b9+HPM2qQeqa21ffXPVvmdXkfydo18O+R2LdcT97UFxydc+LXm1dItiZNR/wvNA9Wd3n0xP5tVWph4r8r4h75vLbfZImTqKpIG4eqqG/t27ny+Yx7t47zzP5U70/zv7fr0+Y8H9W6q3sAjC'+
			'M3dQBArz7YgCCwpJVLjvZxVYUFCkIEACISARTJhAKEgEDSQQCoIACYSE4AMJhISggQRCYioTHemJBAtCIUydBiCAfTo/4DIAiZ/aT9NAAg3EVD8EJM08NB5oGqIAefVBTBkxY5JAA8mOQwANJI2AAOBpR+x+ElsHYI9BbF+2TjOP/ifYPlNvE0AAQLCf+JUB3m8SABqAJgBoeuqB94hNryKaBgQE0OwbAWi27cHbA5ghPMB5gwDCZQAiPXV58Bch8syPp2OFjs+HS8x3/geyxdRiBE87/QAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_12.onmouseout=function (e) {
			me.elementMouseDown['on_12']=false;
		}
		me._on_12.onmousedown=function (e) {
			me.elementMouseDown['on_12']=true;
		}
		me._on_12.onmouseup=function (e) {
			me.elementMouseDown['on_12']=false;
		}
		me._on_12.ontouchend=function (e) {
			me.elementMouseDown['on_12']=false;
		}
		me._on_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j6.appendChild(me._on_12);
		el=me._off_12=document.createElement('div');
		els=me._off_12__img=document.createElement('img');
		els.className='ggskin ggskin_off_12';
		hs=basePath + 'images/off_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u5ea6\u5047\u5ba2\u5385"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_12.style[domTransition]='';
				if (me._off_12.ggCurrentLogicStateVisible == 0) {
					me._off_12.style.visibility=(Number(me._off_12.style.opacity)>0||!me._off_12.style.opacity)?'inherit':'hidden';
					me._off_12.ggVisible=true;
				}
				else {
					me._off_12.style.visibility="hidden";
					me._off_12.ggVisible=false;
				}
			}
		}
		me._off_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j6.appendChild(me._off_12);
		me._btn.appendChild(me._j6);
		el=me._j7=document.createElement('div');
		el.ggId="j7";
		el.ggDx=200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_11=document.createElement('div');
		els=me._on_11__img=document.createElement('img');
		els.className='ggskin ggskin_on_11';
		hs='data:image/png;base64,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'+
			'AAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_11.onmouseout=function (e) {
			me.elementMouseDown['on_11']=false;
		}
		me._on_11.onmousedown=function (e) {
			me.elementMouseDown['on_11']=true;
		}
		me._on_11.onmouseup=function (e) {
			me.elementMouseDown['on_11']=false;
		}
		me._on_11.ontouchend=function (e) {
			me.elementMouseDown['on_11']=false;
		}
		me._on_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j7.appendChild(me._on_11);
		el=me._off_11=document.createElement('div');
		els=me._off_11__img=document.createElement('img');
		els.className='ggskin ggskin_off_11';
		hs=basePath + 'images/off_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u6d41\u5149\u821e\u53f0"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_11.style[domTransition]='';
				if (me._off_11.ggCurrentLogicStateVisible == 0) {
					me._off_11.style.visibility=(Number(me._off_11.style.opacity)>0||!me._off_11.style.opacity)?'inherit':'hidden';
					me._off_11.ggVisible=true;
				}
				else {
					me._off_11.style.visibility="hidden";
					me._off_11.ggVisible=false;
				}
			}
		}
		me._off_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j7.appendChild(me._off_11);
		me._btn.appendChild(me._j7);
		el=me._j8=document.createElement('div');
		el.ggId="j8";
		el.ggDx=300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_10=document.createElement('div');
		els=me._on_10__img=document.createElement('img');
		els.className='ggskin ggskin_on_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_10.onmouseout=function (e) {
			me.elementMouseDown['on_10']=false;
		}
		me._on_10.onmousedown=function (e) {
			me.elementMouseDown['on_10']=true;
		}
		me._on_10.onmouseup=function (e) {
			me.elementMouseDown['on_10']=false;
		}
		me._on_10.ontouchend=function (e) {
			me.elementMouseDown['on_10']=false;
		}
		me._on_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j8.appendChild(me._on_10);
		el=me._off_10=document.createElement('div');
		els=me._off_10__img=document.createElement('img');
		els.className='ggskin ggskin_off_10';
		hs=basePath + 'images/off_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u68ee\u6797\u5b09\u620f\u8c37"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_10.style[domTransition]='';
				if (me._off_10.ggCurrentLogicStateVisible == 0) {
					me._off_10.style.visibility=(Number(me._off_10.style.opacity)>0||!me._off_10.style.opacity)?'inherit':'hidden';
					me._off_10.ggVisible=true;
				}
				else {
					me._off_10.style.visibility="hidden";
					me._off_10.ggVisible=false;
				}
			}
		}
		me._off_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j8.appendChild(me._off_10);
		me._btn.appendChild(me._j8);
		el=me._j9=document.createElement('div');
		el.ggId="j9";
		el.ggDx=400;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._j9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._j9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._on_1=document.createElement('div');
		els=me._on_1__img=document.createElement('img');
		els.className='ggskin ggskin_on_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ON_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._on_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on_1.onmouseout=function (e) {
			me.elementMouseDown['on_1']=false;
		}
		me._on_1.onmousedown=function (e) {
			me.elementMouseDown['on_1']=true;
		}
		me._on_1.onmouseup=function (e) {
			me.elementMouseDown['on_1']=false;
		}
		me._on_1.ontouchend=function (e) {
			me.elementMouseDown['on_1']=false;
		}
		me._on_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j9.appendChild(me._on_1);
		el=me._off_1=document.createElement('div');
		els=me._off_1__img=document.createElement('img');
		els.className='ggskin ggskin_off_1';
		hs=basePath + 'images/off_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="OFF_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._off_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "\u5eb7\u6837\u82b1\u56ed"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off_1.style[domTransition]='';
				if (me._off_1.ggCurrentLogicStateVisible == 0) {
					me._off_1.style.visibility=(Number(me._off_1.style.opacity)>0||!me._off_1.style.opacity)?'inherit':'hidden';
					me._off_1.ggVisible=true;
				}
				else {
					me._off_1.style.visibility="hidden";
					me._off_1.ggVisible=false;
				}
			}
		}
		me._off_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._j9.appendChild(me._off_1);
		me._btn.appendChild(me._j9);
		me.divSkin.appendChild(me._btn);
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__3);
		me.__3__normal = clonedNormalElement._point_visited;
		me.__3__normal.style.visibility='inherit';
		me.__3__normal.style.left='-13px';
		me.__3__normal.style.top='-13px';
		me.__3.ggMarkerNormal=me.__3__normal;
		me.__3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__3);
		me.__3__active= clonedActiveElement._point_visited;
		me.__3__active.style.visibility='hidden';
		me.__3__active.style.left='-13px';
		me.__3__active.style.top='-13px';
		me.__3.ggMarkerActive=me.__3__active;
		me.__3.ggMarkerInstances.push(clonedActiveElement);
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__active,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__active);
		}
		if (me.__3.firstChild) {
			me.__3.insertBefore(me.__3__normal,me.__3.firstChild);
		} else {
			me.__3.appendChild(me.__3__normal);
		}
		for (var i = 0; i < me.__3.childNodes.length; i++) {
			me.__3.ggMarkerInstances.push(me.__3.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__1);
		me.__1__normal = clonedNormalElement._point_visited;
		me.__1__normal.style.visibility='inherit';
		me.__1__normal.style.left='-13px';
		me.__1__normal.style.top='-13px';
		me.__1.ggMarkerNormal=me.__1__normal;
		me.__1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__1);
		me.__1__active= clonedActiveElement._point_visited;
		me.__1__active.style.visibility='hidden';
		me.__1__active.style.left='-13px';
		me.__1__active.style.top='-13px';
		me.__1.ggMarkerActive=me.__1__active;
		me.__1.ggMarkerInstances.push(clonedActiveElement);
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__active,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__active);
		}
		if (me.__1.firstChild) {
			me.__1.insertBefore(me.__1__normal,me.__1.firstChild);
		} else {
			me.__1.appendChild(me.__1__normal);
		}
		for (var i = 0; i < me.__1.childNodes.length; i++) {
			me.__1.ggMarkerInstances.push(me.__1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__2);
		me.__2__normal = clonedNormalElement._point_visited;
		me.__2__normal.style.visibility='inherit';
		me.__2__normal.style.left='-13px';
		me.__2__normal.style.top='-13px';
		me.__2.ggMarkerNormal=me.__2__normal;
		me.__2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__2);
		me.__2__active= clonedActiveElement._point_visited;
		me.__2__active.style.visibility='hidden';
		me.__2__active.style.left='-13px';
		me.__2__active.style.top='-13px';
		me.__2.ggMarkerActive=me.__2__active;
		me.__2.ggMarkerInstances.push(clonedActiveElement);
		if (me.__2.firstChild) {
			me.__2.insertBefore(me.__2__active,me.__2.firstChild);
		} else {
			me.__2.appendChild(me.__2__active);
		}
		if (me.__2.firstChild) {
			me.__2.insertBefore(me.__2__normal,me.__2.firstChild);
		} else {
			me.__2.appendChild(me.__2__normal);
		}
		for (var i = 0; i < me.__2.childNodes.length; i++) {
			me.__2.ggMarkerInstances.push(me.__2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__4);
		me.__4__normal = clonedNormalElement._point_visited;
		me.__4__normal.style.visibility='inherit';
		me.__4__normal.style.left='-13px';
		me.__4__normal.style.top='-13px';
		me.__4.ggMarkerNormal=me.__4__normal;
		me.__4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__4);
		me.__4__active= clonedActiveElement._point_visited;
		me.__4__active.style.visibility='hidden';
		me.__4__active.style.left='-13px';
		me.__4__active.style.top='-13px';
		me.__4.ggMarkerActive=me.__4__active;
		me.__4.ggMarkerInstances.push(clonedActiveElement);
		if (me.__4.firstChild) {
			me.__4.insertBefore(me.__4__active,me.__4.firstChild);
		} else {
			me.__4.appendChild(me.__4__active);
		}
		if (me.__4.firstChild) {
			me.__4.insertBefore(me.__4__normal,me.__4.firstChild);
		} else {
			me.__4.appendChild(me.__4__normal);
		}
		for (var i = 0; i < me.__4.childNodes.length; i++) {
			me.__4.ggMarkerInstances.push(me.__4.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__5);
		me.__5__normal = clonedNormalElement._point_visited;
		me.__5__normal.style.visibility='inherit';
		me.__5__normal.style.left='-13px';
		me.__5__normal.style.top='-13px';
		me.__5.ggMarkerNormal=me.__5__normal;
		me.__5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__5);
		me.__5__active= clonedActiveElement._point_visited;
		me.__5__active.style.visibility='hidden';
		me.__5__active.style.left='-13px';
		me.__5__active.style.top='-13px';
		me.__5.ggMarkerActive=me.__5__active;
		me.__5.ggMarkerInstances.push(clonedActiveElement);
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__active,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__active);
		}
		if (me.__5.firstChild) {
			me.__5.insertBefore(me.__5__normal,me.__5.firstChild);
		} else {
			me.__5.appendChild(me.__5__normal);
		}
		for (var i = 0; i < me.__5.childNodes.length; i++) {
			me.__5.ggMarkerInstances.push(me.__5.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_point_visited_Class(this,me.__6);
		me.__6__normal = clonedNormalElement._point_visited;
		me.__6__normal.style.visibility='inherit';
		me.__6__normal.style.left='-13px';
		me.__6__normal.style.top='-13px';
		me.__6.ggMarkerNormal=me.__6__normal;
		me.__6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_point_visited_Class(this,me.__6);
		me.__6__active= clonedActiveElement._point_visited;
		me.__6__active.style.visibility='hidden';
		me.__6__active.style.left='-13px';
		me.__6__active.style.top='-13px';
		me.__6.ggMarkerActive=me.__6__active;
		me.__6.ggMarkerInstances.push(clonedActiveElement);
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__active,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__active);
		}
		if (me.__6.firstChild) {
			me.__6.insertBefore(me.__6__normal,me.__6.firstChild);
		} else {
			me.__6.appendChild(me.__6__normal);
		}
		for (var i = 0; i < me.__6.childNodes.length; i++) {
			me.__6.ggMarkerInstances.push(me.__6.childNodes[i]);
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_bird_changenode = function(){
		if(hotspotTemplates['ht_bird']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird'].length; i++) {
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_scaling) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_scaling) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bird_changevisitednodes = function(){
		if(hotspotTemplates['ht_bird']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird'].length; i++) {
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_visible) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_visible) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bird_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_bird']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird'].length; i++) {
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_scaling) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2 && hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_scaling) {
					hotspotTemplates['ht_bird'][i]._ht_node_image_visited_2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_noderight_changenode = function(){
		if(hotspotTemplates['ht_noderight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noderight'].length; i++) {
				if (hotspotTemplates['ht_noderight'][i]._ht_node_image_10 && hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_alpha) {
					hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_noderight'][i]._ht_node_image_10 && hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_position) {
					hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_noderight_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_noderight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noderight'].length; i++) {
				if (hotspotTemplates['ht_noderight'][i]._ht_node_image_10 && hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_alpha) {
					hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_noderight'][i]._ht_node_image_10 && hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_position) {
					hotspotTemplates['ht_noderight'][i]._ht_node_image_10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image && hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_image_3 && hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._ht_node_image_3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_changenode = function(){
		if(hotspotTemplates['ht_nodeleft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeleft'].length; i++) {
				if (hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1 && hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1 && hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_position) {
					hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_nodeleft_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_nodeleft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeleft'].length; i++) {
				if (hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1 && hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_alpha) {
					hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1 && hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_position) {
					hotspotTemplates['ht_nodeleft'][i]._ht_node_image_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bird_out_changenode = function(){
		if(hotspotTemplates['ht_bird_out']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird_out'].length; i++) {
				if (hotspotTemplates['ht_bird_out'][i]._image_4 && hotspotTemplates['ht_bird_out'][i]._image_4.logicBlock_alpha) {
					hotspotTemplates['ht_bird_out'][i]._image_4.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_bird_out'][i]._rectangle_1 && hotspotTemplates['ht_bird_out'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_bird_out'][i]._rectangle_1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bird_out_positionchanged = function(){
		if(hotspotTemplates['ht_bird_out']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird_out'].length; i++) {
				if (hotspotTemplates['ht_bird_out'][i]._ht_bird_out.logicBlock_visible) {
					hotspotTemplates['ht_bird_out'][i]._ht_bird_out.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_bird_out_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_bird_out']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird_out'].length; i++) {
				if (hotspotTemplates['ht_bird_out'][i]._image_4 && hotspotTemplates['ht_bird_out'][i]._image_4.logicBlock_alpha) {
					hotspotTemplates['ht_bird_out'][i]._image_4.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_bird_out'][i]._rectangle_1 && hotspotTemplates['ht_bird_out'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_bird_out'][i]._rectangle_1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_jy_positionchanged = function(){
		if(hotspotTemplates['ht_jy']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_jy'].length; i++) {
				if (hotspotTemplates['ht_jy'][i]._ht_jy.logicBlock_visible) {
					hotspotTemplates['ht_jy'][i]._ht_jy.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_sy_positionchanged = function(){
		if(hotspotTemplates['ht_sy']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_sy'].length; i++) {
				if (hotspotTemplates['ht_sy'][i]._ht_sy.logicBlock_visible) {
					hotspotTemplates['ht_sy'][i]._ht_sy.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_st_positionchanged = function(){
		if(hotspotTemplates['ht_st']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_st'].length; i++) {
				if (hotspotTemplates['ht_st'][i]._ht_st.logicBlock_visible) {
					hotspotTemplates['ht_st'][i]._ht_st.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_jt_positionchanged = function(){
		if(hotspotTemplates['ht_jt']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_jt'].length; i++) {
				if (hotspotTemplates['ht_jt'][i]._ht_jt.logicBlock_visible) {
					hotspotTemplates['ht_jt'][i]._ht_jt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_1_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_1'].length; i++) {
				if (hotspotTemplates['ht_housetitle_1'][i]._ht_housetitle_1.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_1'][i]._ht_housetitle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_1'][i]._image_24 && hotspotTemplates['ht_housetitle_1'][i]._image_24.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_1'][i]._image_24.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_2_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_2'].length; i++) {
				if (hotspotTemplates['ht_housetitle_2'][i]._ht_housetitle_2.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_2'][i]._ht_housetitle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_2'][i]._image_23 && hotspotTemplates['ht_housetitle_2'][i]._image_23.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_2'][i]._image_23.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_3_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_3'].length; i++) {
				if (hotspotTemplates['ht_housetitle_3'][i]._ht_housetitle_3.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_3'][i]._ht_housetitle_3.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_3'][i]._image_22 && hotspotTemplates['ht_housetitle_3'][i]._image_22.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_3'][i]._image_22.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_4_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_4'].length; i++) {
				if (hotspotTemplates['ht_housetitle_4'][i]._ht_housetitle_4.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_4'][i]._ht_housetitle_4.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_4'][i]._image_21 && hotspotTemplates['ht_housetitle_4'][i]._image_21.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_4'][i]._image_21.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_3_1_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_3_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_3_1'].length; i++) {
				if (hotspotTemplates['ht_housetitle_3_1'][i]._ht_housetitle_3_1.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_3_1'][i]._ht_housetitle_3_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_3_1'][i]._image_20 && hotspotTemplates['ht_housetitle_3_1'][i]._image_20.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_3_1'][i]._image_20.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_housetitle_1_2_positionchanged = function(){
		if(hotspotTemplates['ht_housetitle_1_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_1_2'].length; i++) {
				if (hotspotTemplates['ht_housetitle_1_2'][i]._ht_housetitle_1_2.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_1_2'][i]._ht_housetitle_1_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_housetitle_1_2'][i]._image_2 && hotspotTemplates['ht_housetitle_1_2'][i]._image_2.logicBlock_scaling) {
					hotspotTemplates['ht_housetitle_1_2'][i]._image_2.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._ht_node_timer.ggLastIsActive!=me._ht_node_timer.ggIsActive()) {
			me._ht_node_timer.ggLastIsActive=me._ht_node_timer.ggIsActive();
			if (me._ht_node_timer.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
		var hs='';
		if (me._point3.ggParameter) {
			hs+=parameterToTransform(me._point3.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 80)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point3.style[domTransform]=hs;
		var hs='';
		if (me._point1.ggParameter) {
			hs+=parameterToTransform(me._point1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 50)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point1.style[domTransform]=hs;
		var hs='';
		if (me._point2.ggParameter) {
			hs+=parameterToTransform(me._point2.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 35)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point2.style[domTransform]=hs;
		var hs='';
		if (me._point41.ggParameter) {
			hs+=parameterToTransform(me._point41.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 50)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point41.style[domTransform]=hs;
		var hs='';
		if (me._point40.ggParameter) {
			hs+=parameterToTransform(me._point40.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 45)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point40.style[domTransform]=hs;
		var hs='';
		if (me._point4.ggParameter) {
			hs+=parameterToTransform(me._point4.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 45)) + 'deg) ';
		hs+='scale(' + (Math.tan(player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ') ';
		me._point4.style[domTransform]=hs;
		var hs='';
		if (me._image_3.ggParameter) {
			hs+=parameterToTransform(me._image_3.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._image_3.style[domTransform]=hs;
		if (me.elementMouseDown['on_17']) {
			player.openNext("{node5}","");
		}
		if (me.elementMouseDown['on_16']) {
			player.openNext("{node9}","");
		}
		if (me.elementMouseDown['on_15']) {
			player.openNext("{node6}","");
		}
		if (me.elementMouseDown['on_14']) {
			player.openNext("{node2}","");
		}
		if (me.elementMouseDown['on_13']) {
			player.openNext("{node8}","");
		}
		if (me.elementMouseDown['on_12']) {
			player.openNext("{node1}","");
		}
		if (me.elementMouseDown['on_11']) {
			player.openNext("{node4}","");
		}
		if (me.elementMouseDown['on_10']) {
			player.openNext("{node7}","");
		}
		if (me.elementMouseDown['on_1']) {
			player.openNext("{node3}","");
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_bird(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_bird=document.createElement('div');
		el.ggId="ht_bird";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_bird.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_bird.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin._c_menu.style[domTransition]='none';
			skin._c_menu.style.visibility='hidden';
			skin._c_menu.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image_2=document.createElement('div');
		els=me._ht_node_image_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC40NyAxOC41NyIgaWQ9IuWbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7b3BhY2l0eTowLjI2O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPmJpcmQ8L3RpdGxlPgogPHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNSAtNy4xOCkiIGQ9Ik0zMS4zNCwxMEgzMC4yOWEuNy43LDAsMCwwLS41OC4zM2MtLjQ2Ljc4LTEuNiwyLjc2LTIuMjIsNC4xMWgtN2MtLjg1LTEuNi0yLjg2LTIuMz'+
			'ktNy0yLjZhLjQzLjQzLDAsMCwxLDAtLjA1VjkuNDVIMjIuOGEuNjcuNjcsMCwxLDAsMC0xLjMzaC0yMGEuNjcuNjcsMCwxLDAsMCwxLjMzaDkuMzZ2Mi4zOEgxMC44M0E3LjgzLDcuODMsMCwwLDAsMy40NywxNmMtMi43Nyw0LjgzLS4yNSw2LjQ3LDEuNjUsNi40N0g3LjIzVjI0LjZINS41NEw0LjM4LDI0YS41Ny41NywwLDAsMC0uNzguMjMuNTguNTgsMCwwLDAsLjIyLjc4bDEuMy43MWEuNjQuNjQsMCwwLDAsLjI3LjA3SDE3Ljg1YS41OC41OCwwLDAsMCwwLTEuMTVIMTVWMjIuNDZjMi4wOS0uMTIsMy42Mi0xLjMzLDUuNTUtMy44Mmw3LS45MnMxLjIsMS43NywxLjMsMS45M2EuNTcuNTcsMCww'+
			'LDAsLjQyLjI5SDMwYy4yMSwwLC4zMy0uMTQuMzYtLjM4LjI1LTEuNzMsMS4yNS04Ljc1LDEuMy05UzMxLjUzLDEwLDMxLjM0LDEwWk01LDE4LjI5Yy0uMjMsMC0uMjUtLjI2LS4yMS0uMzlDNS41LDE1LjQ4LDgsMTMuOCw5LjQ4LDEzLjhoMy4zMWMuMTcsMCwuMjEuMDkuMTUuMjQtLjM4Ljg3LTEuNjgsMy44Ny0xLjc0LDRhLjQzLjQzLDAsMCwxLS40LjI2Wm0zLjQsNi4zMVYyMi40N2g1LjVWMjQuNloiLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMTUgLTcuMTgpIiBkPSJNMzAuMzQsOS4xSDI5LjI5YS43MS43MSwwLDAsMC0uNTguMzRjLS40Ni43Ny0xLj'+
			'YsMi43Ni0yLjIyLDQuMTFoLTdjLS44NS0xLjYtMi44Ni0yLjM5LTctMi42MVY4LjUySDIxLjhhLjY3LjY3LDAsMSwwLDAtMS4zNGgtMjBhLjY3LjY3LDAsMSwwLDAsMS4zNGg5LjM2VjEwLjloMGwtMS4zNSwwYTcuODMsNy44MywwLDAsMC03LjM2LDQuMTljLTIuNzcsNC44My0uMjUsNi40NywxLjY1LDYuNDdINi4yM3YyLjEzSDQuNTRMMy4zOCwyM2EuNTcuNTcsMCwwLDAtLjU2LDFsMS4zLjcyYS42NC42NCwwLDAsMCwuMjcuMDdIMTYuODVhLjU4LjU4LDAsMCwwLDAtMS4xNUgxNFYyMS41M2MyLjA5LS4xMywzLjYyLTEuMzMsNS41NS0zLjgybDctLjkzLDEuMywxLjkzYS41NS41NSwwLDAsMCwu'+
			'NDIuMjlIMjljLjIxLDAsLjMzLS4xMy4zNi0uMzguMjUtMS43MiwxLjI1LTguNzQsMS4zLTlTMzAuNTMsOS4xLDMwLjM0LDkuMVpNNCwxNy4zNWMtLjIzLDAtLjI1LS4yNS0uMjEtLjM4Ljc0LTIuNDIsMy4xOS00LjEsNC43Mi00LjFoMy4zMWMuMTcsMCwuMjEuMDkuMTUuMjQtLjM4Ljg3LTEuNjgsMy44Ny0xLjc0LDRhLjQ0LjQ0LDAsMCwxLS40LjI1Wm0zLjQsNi4zMlYyMS41NGg1LjV2Mi4xM1oiLz4KPC9zdmc+Cg==';
		me._ht_node_image_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image_2.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image_2.ggParameter.sx = 1.1;
					me._ht_node_image_2.ggParameter.sy = 1.1;
					me._ht_node_image_2.style[domTransform]=parameterToTransform(me._ht_node_image_2.ggParameter);
				}
				else {
					me._ht_node_image_2.ggParameter.sx = 1;
					me._ht_node_image_2.ggParameter.sy = 1;
					me._ht_node_image_2.style[domTransform]=parameterToTransform(me._ht_node_image_2.ggParameter);
				}
			}
		}
		me._ht_node_image_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image_2.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image_2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image_2.style.visibility="hidden";
					me._ht_node_image_2.ggVisible=false;
				}
				else {
					me._ht_node_image_2.style.visibility=(Number(me._ht_node_image_2.style.opacity)>0||!me._ht_node_image_2.style.opacity)?'inherit':'hidden';
					me._ht_node_image_2.ggVisible=true;
				}
			}
		}
		me._ht_node_image_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_bird.appendChild(me._ht_node_image_2);
		el=me._ht_node_image_visited_2=document.createElement('div');
		els=me._ht_node_image_visited_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC40NyAxOC41NyIgaWQ9IuWbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7b3BhY2l0eTowLjI2O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPmJpcmQ8L3RpdGxlPgogPHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNSAtNy4xOCkiIGQ9Ik0zMS4zNCwxMEgzMC4yOWEuNy43LDAsMCwwLS41OC4zM2MtLjQ2Ljc4LTEuNiwyLjc2LTIuMjIsNC4xMWgtN2MtLjg1LTEuNi0yLjg2LTIuMz'+
			'ktNy0yLjZhLjQzLjQzLDAsMCwxLDAtLjA1VjkuNDVIMjIuOGEuNjcuNjcsMCwxLDAsMC0xLjMzaC0yMGEuNjcuNjcsMCwxLDAsMCwxLjMzaDkuMzZ2Mi4zOEgxMC44M0E3LjgzLDcuODMsMCwwLDAsMy40NywxNmMtMi43Nyw0LjgzLS4yNSw2LjQ3LDEuNjUsNi40N0g3LjIzVjI0LjZINS41NEw0LjM4LDI0YS41Ny41NywwLDAsMC0uNzguMjMuNTguNTgsMCwwLDAsLjIyLjc4bDEuMy43MWEuNjQuNjQsMCwwLDAsLjI3LjA3SDE3Ljg1YS41OC41OCwwLDAsMCwwLTEuMTVIMTVWMjIuNDZjMi4wOS0uMTIsMy42Mi0xLjMzLDUuNTUtMy44Mmw3LS45MnMxLjIsMS43NywxLjMsMS45M2EuNTcuNTcsMCww'+
			'LDAsLjQyLjI5SDMwYy4yMSwwLC4zMy0uMTQuMzYtLjM4LjI1LTEuNzMsMS4yNS04Ljc1LDEuMy05UzMxLjUzLDEwLDMxLjM0LDEwWk01LDE4LjI5Yy0uMjMsMC0uMjUtLjI2LS4yMS0uMzlDNS41LDE1LjQ4LDgsMTMuOCw5LjQ4LDEzLjhoMy4zMWMuMTcsMCwuMjEuMDkuMTUuMjQtLjM4Ljg3LTEuNjgsMy44Ny0xLjc0LDRhLjQzLjQzLDAsMCwxLS40LjI2Wm0zLjQsNi4zMVYyMi40N2g1LjVWMjQuNloiLz4KIDxwYXRoIGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMTUgLTcuMTgpIiBkPSJNMzAuMzQsOS4xSDI5LjI5YS43MS43MSwwLDAsMC0uNTguMzRjLS40Ni43Ny0xLj'+
			'YsMi43Ni0yLjIyLDQuMTFoLTdjLS44NS0xLjYtMi44Ni0yLjM5LTctMi42MVY4LjUySDIxLjhhLjY3LjY3LDAsMSwwLDAtMS4zNGgtMjBhLjY3LjY3LDAsMSwwLDAsMS4zNGg5LjM2VjEwLjloMGwtMS4zNSwwYTcuODMsNy44MywwLDAsMC03LjM2LDQuMTljLTIuNzcsNC44My0uMjUsNi40NywxLjY1LDYuNDdINi4yM3YyLjEzSDQuNTRMMy4zOCwyM2EuNTcuNTcsMCwwLDAtLjU2LDFsMS4zLjcyYS42NC42NCwwLDAsMCwuMjcuMDdIMTYuODVhLjU4LjU4LDAsMCwwLDAtMS4xNUgxNFYyMS41M2MyLjA5LS4xMywzLjYyLTEuMzMsNS41NS0zLjgybDctLjkzLDEuMywxLjkzYS41NS41NSwwLDAsMCwu'+
			'NDIuMjlIMjljLjIxLDAsLjMzLS4xMy4zNi0uMzguMjUtMS43MiwxLjI1LTguNzQsMS4zLTlTMzAuNTMsOS4xLDMwLjM0LDkuMVpNNCwxNy4zNWMtLjIzLDAtLjI1LS4yNS0uMjEtLjM4Ljc0LTIuNDIsMy4xOS00LjEsNC43Mi00LjFoMy4zMWMuMTcsMCwuMjEuMDkuMTUuMjQtLjM4Ljg3LTEuNjgsMy44Ny0xLjc0LDRhLjQ0LjQ0LDAsMCwxLS40LjI1Wm0zLjQsNi4zMlYyMS41NGg1LjV2Mi4xM1oiLz4KPC9zdmc+Cg==';
		me._ht_node_image_visited_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_visited_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_visited_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_visited_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image_visited_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image_visited_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image_visited_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image_visited_2.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image_visited_2.ggParameter.sx = 1.1;
					me._ht_node_image_visited_2.ggParameter.sy = 1.1;
					me._ht_node_image_visited_2.style[domTransform]=parameterToTransform(me._ht_node_image_visited_2.ggParameter);
				}
				else {
					me._ht_node_image_visited_2.ggParameter.sx = 1;
					me._ht_node_image_visited_2.ggParameter.sy = 1;
					me._ht_node_image_visited_2.style[domTransform]=parameterToTransform(me._ht_node_image_visited_2.ggParameter);
				}
			}
		}
		me._ht_node_image_visited_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_image_visited_2.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image_visited_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image_visited_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image_visited_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_node_image_visited_2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image_visited_2.style.visibility=(Number(me._ht_node_image_visited_2.style.opacity)>0||!me._ht_node_image_visited_2.style.opacity)?'inherit':'hidden';
					me._ht_node_image_visited_2.ggVisible=true;
				}
				else {
					me._ht_node_image_visited_2.style.visibility="hidden";
					me._ht_node_image_visited_2.ggVisible=false;
				}
			}
		}
		me._ht_node_image_visited_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_bird.appendChild(me._ht_node_image_visited_2);
		el=me._text_1_30=document.createElement('div');
		els=me._text_1_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_3";
		el.ggDx=15;
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 16px 5px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((82-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_bird.appendChild(me._text_1_30);
		me.__div = me._ht_bird;
	};
	function SkinHotspotClass_ht_noderight(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_noderight=document.createElement('div');
		el.ggId="ht_noderight";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_noderight.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_noderight.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_noderight.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_noderight.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_noderight.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_noderight.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image_visited_10=document.createElement('div');
		els=me._ht_node_image_visited_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTUuNzMgMjkuODkiIGlkPSLlm77lsYJfMSIgZGF0YS1uYW1lPSLlm77lsYIgMSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye29wYWNpdHk6MC41O30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO30uY2xzLTV7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTIpO30uY2xzLTZ7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTMpO30uY2xzLT'+
			'd7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTh7ZmlsbDojZmZmO30uY2xzLTl7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTUpO30uY2xzLTEwe2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC02KTt9PC9zdHlsZT4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aCI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTAuMzUgNDEuMDggMTQuNDEgMjYuNzcgMzkuMDggMjYuNDIgMzMuNDEgNDEuNzggLTAuMzUgNDEuMDgiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KC01Ljc1IC0yMy4zNikiIGlkPSJjbGlwLXBhdGgtMiI+CiAgIDxyZWN0IHg9IjAuMDQiIGNsYXNzPSJjbHMtMSIgeT0iMi4zMSIgaGVpZ2h0PSI0NS41NyIgd2lkdGg9IjY1LjQ1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aC0zIj4KICAgPHBvbHlnb24gcG9pbnRzPSItMi4yNyA1MS40NCAxOS45MSAzMS4yIDYyLjM4IDMwLjIzIDU4Ljc4IDUzLjYgLTIuMjcgNTEuNDQiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy'+
			'4zNikiIGlkPSJjbGlwLXBhdGgtNCI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTIuOTcgMzcuNzMgMTEuOTMgMjMuNTggMzguMzggMjMuMjEgMzMuMTMgMzguNDcgLTIuOTcgMzcuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy4zNikiIGlkPSJjbGlwLXBhdGgtNSI+CiAgIDxyZWN0IHg9Ii0zLjQ4IiBjbGFzcz0iY2xzLTEiIHk9Ii0wLjQiIGhlaWdodD0iNDQuNzkiIHdpZHRoPSI3MS40MiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy4zNikiIGlk'+
			'PSJjbGlwLXBhdGgtNiI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTQuNzkgNDcuODggMTcuNjQgMjguMDMgNjMuNzcgMjYuOTggNjEuMjQgNTAuMTggLTQuNzkgNDcuODgiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8dGl0bGU+5bem6L2sMTwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxnIGNsYXNzPSJjbHMtNCI+CiAgICA8cG9seWxpbmUgcG9pbnRzPSIyMy4wNyAzLjIxIDIuNTYgOS4zMyAyMS4yMSAxOC4yOSAyOC43NSAxNS40OSAxMy4xMyA5LjA1IDI3LjYgNC41IDIzLjA3IDMuMjEiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIGNsYXNzPSJjbHMtNSI+CiAgPGcgY2xhc3M9ImNscy0yIj4KICAgPGcgY2xhc3M9ImNscy0zIj4KICAgIDxnIGNsYXNzPSJjbHMtNiI+CiAgICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgZD0iTTI1LjM5LDMxLjA4bC0xLjM5LDAtMS4zOSwwLTEuMzguMDUtMS4zNiwwLTIsMS45NC44MiwwLC44MiwwLC44MywwaC44M2wyLjgsMGgyLjc5Yy45MiwwLDEuODQsMCwyLjc0LDBzMS44MSwwLDIuNjkuMDlsLjg1LDBjLjI4LDAsLjU1LDAsLjgyLjA2bC44LjA2Ljc4LjA4LjczLjEuNzEuMS42OC4xMi42Mi4xNC41Ny4xNi41My4xOC41LjE5LjQ1LjIyYy4x'+
			'NC4wOC4yOC4xNi40MS4yNWwuMzguMjZjLjEyLjA5LjI0LjE4LjM1LjI4bC4zMS4zMWE1Ljc1LDUuNzUsMCwwLDEsLjU1LjY3LDcuMjUsNy4yNSwwLDAsMSwuNDcuNzVjLjE1LjI2LjI4LjUzLjQxLjhzLjI1LjU3LjM3Ljg2LjIzLjYxLjM0LjkyLjIzLjYzLjM0LDFsLjMzLDFjLjEyLjM1LjIzLjcuMzUsMS4wNi4yNC43My40OSwxLjQ5Ljc2LDIuMjdzLjU2LDEuNjMuODgsMi40OS42NywxLjc5LDEsMi43Mi43OSwyLDEuMjMsM2wxMC4zNC0xLjYzYy0uNjMtMS0xLjIzLTEuOTEtMS43OS0yLjgzcy0xLjA2LTEuNzQtMS41NS0yLjU4LS45Mi0xLjYtMS4zNS0yLjM3LS44MS0xLjQ3LTEuMTktMi4xOW'+
			'wtLjU2LTFjLS4xOC0uMzMtLjM2LS42Ni0uNTUtMXMtLjM2LS42NS0uNTQtMS0uMzYtLjYyLS41NS0uOTMtLjM4LS42LS41OC0uODlTNTAsMzYuMjcsNDkuOCwzNmExMSwxMSwwLDAsMC0uNzItLjgzLDkuNTUsOS41NSwwLDAsMC0uODYtLjhjLS4xNS0uMTMtLjMyLS4yNi0uNDktLjM4cy0uMzYtLjI1LS41Ni0uMzctLjQtLjI0LS42MS0uMzUtLjQ0LS4yMy0uNjctLjMzLS40OS0uMjEtLjc1LS4zMWwtLjgyLS4yOC0uODctLjI0LS45MS0uMjJjLS4zMS0uMDctLjYzLS4xMy0uOTUtLjE4cy0uNjQtLjExLTEtLjE1bC0xLS4xMy0xLS4xLTEtLjA4Yy0uMzMsMC0uNjYtLjA1LTEtLjA2bC0xLS4wNi0x'+
			'LDBjLS44LDAtMS41OSwwLTIuMzgsMFMzMC43NywzMSwzMCwzMXMtMS41NCwwLTIuMzEsMGwtMi4yOSwwIi8+CiAgICA8L2c+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0iY2xzLTMiPgogIDxnIGNsYXNzPSJjbHMtNyI+CiAgIDxwb2x5bGluZSBwb2ludHM9IjIyLjA5IDAgMCA2LjA5IDIxLjI4IDE0Ljk5IDI4LjQzIDEyLjA2IDExLjExIDUuODEgMjYuMzcgMS4zOSAyMi4wOSAwIiBjbGFzcz0iY2xzLTgiLz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0iY2xzLTkiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxnIGNsYXNzPSJjbHMtMTAiPgogICAgPHBhdGggY2xhc3M9ImNscy04Ii'+
			'B0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS43NSAtMjMuMzYpIiBkPSJNMjMuNTQsMjcuOWwtMS41LDAtMS40OSwwTDE5LjA3LDI4bC0xLjQ3LDBMMTUuNTIsMzBsLjg2LDBoLjg2bC44NywwLC44NiwwLDIuODksMGgyLjg4YzEsMCwxLjkyLDAsMi44NywwczEuOSwwLDIuODMuMDZsMS44LjA4Yy41OSwwLDEuMTcuMDcsMS43My4xMmwxLjY0LjE2Yy41My4wNywxLC4xNCwxLjUzLjIybC42OS4xNC42Ni4xNS42Mi4xNy41OC4xOS41Mi4yMS40OS4yNC40NS4yNWE0LjM4LDQuMzgsMCwwLDEsLjQyLjI4LDcuNjYsNy42NiwwLDAsMSwuNzQuNjMsOC42Nyw4LjY3LDAsMCwxLC42NC43Miw4LjU0LDguNTQs'+
			'MCwwLDEsLjU2Ljc4Yy4xOC4yOC4zNS41Ni41MS44NnMuMzIuNi40OC45MS4zMS42NC40NywxbC40NywxcS4yNC41My40OCwxLjA4Yy4zMy43NC42NywxLjUxLDEsMi4zcy43OCwxLjY3LDEuMjEsMi41NC45MSwxLjgzLDEuNDEsMi43OSwxLjA4LDIsMS42NywzLjA3TDYxLjQ4LDQ4Yy0uNzgtMS0xLjUxLTEuOTQtMi4yMS0yLjg3cy0xLjMtMS43Ny0xLjkxLTIuNjItMS4xNC0xLjYyLTEuNjctMi40bC0xLjUtMi4yMi0uNjktMS0uNjktMWMtLjIyLS4zMy0uNDUtLjY1LS42OC0xcy0uNDYtLjYzLS43LS45NC0uNDgtLjYtLjc0LS45LS41My0uNTgtLjgzLS44NmExMS40NywxMS40NywwLDAsMC0xLS'+
			'44MywxMSwxMSwwLDAsMC0xLjEyLS43OGMtLjIxLS4xMi0uNDMtLjI1LS42Ni0uMzZzLS40Ny0uMjQtLjczLS4zNWwtLjc4LS4zMmMtLjI3LS4xLS41NC0uMi0uODMtLjI5TDQzLjg3LDI5bC0uOTUtLjIzLTEtLjE5LTEtLjE3cS0xLS4xNC0yLS4yNGMtLjY4LS4wNy0xLjM2LS4xMi0yLS4xN2wtMi0uMS0yLS4wNi0yLjM4LDBIMjguMTJsLTIuMywwLTIuMjgsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image_visited_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_visited_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:-1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image_visited_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_visited_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_noderight.appendChild(me._ht_node_image_visited_10);
		el=me._ht_node_image_10=document.createElement('div');
		els=me._ht_node_image_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjguNDMgMTQuOTkiIGlkPSLlm77lsYJfMSIgZGF0YS1uYW1lPSLlm77lsYIgMSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTN7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoKTt9LmNscy00e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aCI+CiAgIDxwb2'+
			'x5Z29uIHBvaW50cz0iLTIuOTcgMzcuNzMgMTEuOTMgMjMuNTggMzguMzggMjMuMjEgMzMuMTMgMzguNDcgLTIuOTcgMzcuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8dGl0bGU+5bem6L2sMjwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxwb2x5bGluZSBwb2ludHM9IjIyLjA5IDAgMCA2LjA5IDIxLjI4IDE0Ljk5IDI4LjQzIDEyLjA2IDExLjExIDUuODEgMjYuMzcgMS4zOSAyMi4wOSAwIiBjbGFzcz0iY2xzLTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1";
		el.ggParameter={ rx:0,ry:0,a:5,sx:-0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -9px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_image_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_image_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_image_10.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms';
				if (me._ht_node_image_10.ggCurrentLogicStatePosition == 0) {
					me._ht_node_image_10.style.left='13px';
					me._ht_node_image_10.style.top='-14px';
				}
				else {
					me._ht_node_image_10.style.left='-9px';
					me._ht_node_image_10.style.top='-14px';
				}
			}
		}
		me._ht_node_image_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_image_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_image_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_image_10.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms';
				if (me._ht_node_image_10.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_image_10.style.visibility=me._ht_node_image_10.ggVisible?'inherit':'hidden';
					me._ht_node_image_10.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_image_10.style.opacity == 0.0) { me._ht_node_image_10.style.visibility="hidden"; } }, 205);
					me._ht_node_image_10.style.opacity=0;
				}
			}
		}
		me._ht_node_image_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_noderight.appendChild(me._ht_node_image_10);
		el=me._text_1_10=document.createElement('div');
		els=me._text_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=16;
		el.ggDy=48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 16px 5px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((82-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_noderight.appendChild(me._text_1_10);
		me.__div = me._ht_noderight;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MS42OSAxOC4xMyIgaWQ9IuWbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7b3BhY2l0eTowLjU7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8dGl0bGU+5YmN6L+bMTwvdGl0bGU+CiA8cG9seWdvbiBwb2ludHM9IjMwLjg1IDkuMTMgMTIuODYgMTguMTMgMi4zNyAxOC4xMyAzMC44NSAzLjggNTkuMzIgMTguMTMgNDguMzUgMTguMTMgMzAuODUgOS4xMyIgY2xhc3M9ImNscy0xIi8+CiA8cG9seWdvbiBwb2ludHM9IjMwLjg1ID'+
			'UuNzcgMTEuMzYgMTUuNTIgMCAxNS41MiAzMC44NSAwIDYxLjY5IDE1LjUyIDQ5LjgxIDE1LjUyIDMwLjg1IDUuNzciIGNsYXNzPSJjbHMtMiIvPgo8L3N2Zz4K';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_image.style[domTransition]='left 300ms ease 0ms, top 300ms ease 0ms, ' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._ht_node_image.ggCurrentLogicStatePosition == 0) {
					me._ht_node_image.style.left='-16px';
					me._ht_node_image.style.top='-20px';
				}
				else {
					me._ht_node_image.style.left='-16px';
					me._ht_node_image.style.top='-16px';
				}
			}
		}
		me._ht_node_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image.style[domTransition]='left 300ms ease 0ms, top 300ms ease 0ms, ' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._ht_node_image.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image.ggParameter.sx = 0.8;
					me._ht_node_image.ggParameter.sy = 0.8;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
				else {
					me._ht_node_image.ggParameter.sx = 1;
					me._ht_node_image.ggParameter.sy = 1;
					me._ht_node_image.style[domTransform]=parameterToTransform(me._ht_node_image.ggParameter);
				}
			}
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image);
		el=me._ht_node_image_3=document.createElement('div');
		els=me._ht_node_image_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4wOSAxMC41OSIgaWQ9IuWbvuWxgl8xIiBkYXRhLW5hbWU9IuWbvuWxgiAxIj4KIDxkZWZzPgogIDxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPuWJjei/mzI8L3RpdGxlPgogPHBvbHlnb24gcG9pbnRzPSIyMS4wNSAzLjk0IDcuNzUgMTAuNTkgMCAxMC41OSAyMS4wNSAwIDQyLjA5IDEwLjU5IDMzLjk4IDEwLjU5IDIxLjA1IDMuOTQiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K';
		me._ht_node_image_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -27px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_image_3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_node_image_3.ggCurrentLogicStatePosition == 0) {
					me._ht_node_image_3.style.left='-16px';
					me._ht_node_image_3.style.top='-31px';
				}
				else {
					me._ht_node_image_3.style.left='-16px';
					me._ht_node_image_3.style.top='-27px';
				}
			}
		}
		me._ht_node_image_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_image_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_image_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_image_3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_node_image_3.ggCurrentLogicStateScaling == 0) {
					me._ht_node_image_3.ggParameter.sx = 0.4;
					me._ht_node_image_3.ggParameter.sy = 0.4;
					me._ht_node_image_3.style[domTransform]=parameterToTransform(me._ht_node_image_3.ggParameter);
				}
				else {
					me._ht_node_image_3.ggParameter.sx = 0.6;
					me._ht_node_image_3.ggParameter.sy = 0.6;
					me._ht_node_image_3.style[domTransform]=parameterToTransform(me._ht_node_image_3.ggParameter);
				}
			}
		}
		me._ht_node_image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_image_3.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._ht_node_image_3.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._ht_node_image_3.style.opacity == 0.0) { me._ht_node_image_3.style.visibility="hidden"; } }, 505);
					me._ht_node_image_3.style.opacity=0;
				}
				else {
					me._ht_node_image_3.style.visibility=me._ht_node_image_3.ggVisible?'inherit':'hidden';
					me._ht_node_image_3.style.opacity=1;
				}
			}
		}
		me._ht_node_image_3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_image_3);
		el=me._text_1_2=document.createElement('div');
		els=me._text_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_2";
		el.ggDx=16;
		el.ggDy=48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 16px 5px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((82-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._text_1_2);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_nodeleft(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_nodeleft=document.createElement('div');
		el.ggId="ht_nodeleft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_nodeleft.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_nodeleft.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_nodeleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image_visited_1=document.createElement('div');
		els=me._ht_node_image_visited_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTUuNzMgMjkuODkiIGlkPSLlm77lsYJfMSIgZGF0YS1uYW1lPSLlm77lsYIgMSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye29wYWNpdHk6MC41O30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgpO30uY2xzLTV7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTIpO30uY2xzLTZ7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTMpO30uY2xzLT'+
			'd7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTh7ZmlsbDojZmZmO30uY2xzLTl7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTUpO30uY2xzLTEwe2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC02KTt9PC9zdHlsZT4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aCI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTAuMzUgNDEuMDggMTQuNDEgMjYuNzcgMzkuMDggMjYuNDIgMzMuNDEgNDEuNzggLTAuMzUgNDEuMDgiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRl'+
			'KC01Ljc1IC0yMy4zNikiIGlkPSJjbGlwLXBhdGgtMiI+CiAgIDxyZWN0IHg9IjAuMDQiIGNsYXNzPSJjbHMtMSIgeT0iMi4zMSIgaGVpZ2h0PSI0NS41NyIgd2lkdGg9IjY1LjQ1Ii8+CiAgPC9jbGlwUGF0aD4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aC0zIj4KICAgPHBvbHlnb24gcG9pbnRzPSItMi4yNyA1MS40NCAxOS45MSAzMS4yIDYyLjM4IDMwLjIzIDU4Ljc4IDUzLjYgLTIuMjcgNTEuNDQiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy'+
			'4zNikiIGlkPSJjbGlwLXBhdGgtNCI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTIuOTcgMzcuNzMgMTEuOTMgMjMuNTggMzguMzggMjMuMjEgMzMuMTMgMzguNDcgLTIuOTcgMzcuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy4zNikiIGlkPSJjbGlwLXBhdGgtNSI+CiAgIDxyZWN0IHg9Ii0zLjQ4IiBjbGFzcz0iY2xzLTEiIHk9Ii0wLjQiIGhlaWdodD0iNDQuNzkiIHdpZHRoPSI3MS40MiIvPgogIDwvY2xpcFBhdGg+CiAgPGNsaXBQYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ljc1IC0yMy4zNikiIGlk'+
			'PSJjbGlwLXBhdGgtNiI+CiAgIDxwb2x5Z29uIHBvaW50cz0iLTQuNzkgNDcuODggMTcuNjQgMjguMDMgNjMuNzcgMjYuOTggNjEuMjQgNTAuMTggLTQuNzkgNDcuODgiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8dGl0bGU+5bem6L2sMTwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxnIGNsYXNzPSJjbHMtNCI+CiAgICA8cG9seWxpbmUgcG9pbnRzPSIyMy4wNyAzLjIxIDIuNTYgOS4zMyAyMS4yMSAxOC4yOSAyOC43NSAxNS40OSAxMy4xMyA5LjA1IDI3LjYgNC41IDIzLjA3IDMuMjEiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIGNsYXNzPSJjbHMtNSI+CiAgPGcgY2xhc3M9ImNscy0yIj4KICAgPGcgY2xhc3M9ImNscy0zIj4KICAgIDxnIGNsYXNzPSJjbHMtNiI+CiAgICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgZD0iTTI1LjM5LDMxLjA4bC0xLjM5LDAtMS4zOSwwLTEuMzguMDUtMS4zNiwwLTIsMS45NC44MiwwLC44MiwwLC44MywwaC44M2wyLjgsMGgyLjc5Yy45MiwwLDEuODQsMCwyLjc0LDBzMS44MSwwLDIuNjkuMDlsLjg1LDBjLjI4LDAsLjU1LDAsLjgyLjA2bC44LjA2Ljc4LjA4LjczLjEuNzEuMS42OC4xMi42Mi4xNC41Ny4xNi41My4xOC41LjE5LjQ1LjIyYy4x'+
			'NC4wOC4yOC4xNi40MS4yNWwuMzguMjZjLjEyLjA5LjI0LjE4LjM1LjI4bC4zMS4zMWE1Ljc1LDUuNzUsMCwwLDEsLjU1LjY3LDcuMjUsNy4yNSwwLDAsMSwuNDcuNzVjLjE1LjI2LjI4LjUzLjQxLjhzLjI1LjU3LjM3Ljg2LjIzLjYxLjM0LjkyLjIzLjYzLjM0LDFsLjMzLDFjLjEyLjM1LjIzLjcuMzUsMS4wNi4yNC43My40OSwxLjQ5Ljc2LDIuMjdzLjU2LDEuNjMuODgsMi40OS42NywxLjc5LDEsMi43Mi43OSwyLDEuMjMsM2wxMC4zNC0xLjYzYy0uNjMtMS0xLjIzLTEuOTEtMS43OS0yLjgzcy0xLjA2LTEuNzQtMS41NS0yLjU4LS45Mi0xLjYtMS4zNS0yLjM3LS44MS0xLjQ3LTEuMTktMi4xOW'+
			'wtLjU2LTFjLS4xOC0uMzMtLjM2LS42Ni0uNTUtMXMtLjM2LS42NS0uNTQtMS0uMzYtLjYyLS41NS0uOTMtLjM4LS42LS41OC0uODlTNTAsMzYuMjcsNDkuOCwzNmExMSwxMSwwLDAsMC0uNzItLjgzLDkuNTUsOS41NSwwLDAsMC0uODYtLjhjLS4xNS0uMTMtLjMyLS4yNi0uNDktLjM4cy0uMzYtLjI1LS41Ni0uMzctLjQtLjI0LS42MS0uMzUtLjQ0LS4yMy0uNjctLjMzLS40OS0uMjEtLjc1LS4zMWwtLjgyLS4yOC0uODctLjI0LS45MS0uMjJjLS4zMS0uMDctLjYzLS4xMy0uOTUtLjE4cy0uNjQtLjExLTEtLjE1bC0xLS4xMy0xLS4xLTEtLjA4Yy0uMzMsMC0uNjYtLjA1LTEtLjA2bC0xLS4wNi0x'+
			'LDBjLS44LDAtMS41OSwwLTIuMzgsMFMzMC43NywzMSwzMCwzMXMtMS41NCwwLTIuMzEsMGwtMi4yOSwwIi8+CiAgICA8L2c+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0iY2xzLTMiPgogIDxnIGNsYXNzPSJjbHMtNyI+CiAgIDxwb2x5bGluZSBwb2ludHM9IjIyLjA5IDAgMCA2LjA5IDIxLjI4IDE0Ljk5IDI4LjQzIDEyLjA2IDExLjExIDUuODEgMjYuMzcgMS4zOSAyMi4wOSAwIiBjbGFzcz0iY2xzLTgiLz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0iY2xzLTkiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxnIGNsYXNzPSJjbHMtMTAiPgogICAgPHBhdGggY2xhc3M9ImNscy04Ii'+
			'B0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS43NSAtMjMuMzYpIiBkPSJNMjMuNTQsMjcuOWwtMS41LDAtMS40OSwwTDE5LjA3LDI4bC0xLjQ3LDBMMTUuNTIsMzBsLjg2LDBoLjg2bC44NywwLC44NiwwLDIuODksMGgyLjg4YzEsMCwxLjkyLDAsMi44NywwczEuOSwwLDIuODMuMDZsMS44LjA4Yy41OSwwLDEuMTcuMDcsMS43My4xMmwxLjY0LjE2Yy41My4wNywxLC4xNCwxLjUzLjIybC42OS4xNC42Ni4xNS42Mi4xNy41OC4xOS41Mi4yMS40OS4yNC40NS4yNWE0LjM4LDQuMzgsMCwwLDEsLjQyLjI4LDcuNjYsNy42NiwwLDAsMSwuNzQuNjMsOC42Nyw4LjY3LDAsMCwxLC42NC43Miw4LjU0LDguNTQs'+
			'MCwwLDEsLjU2Ljc4Yy4xOC4yOC4zNS41Ni41MS44NnMuMzIuNi40OC45MS4zMS42NC40NywxbC40NywxcS4yNC41My40OCwxLjA4Yy4zMy43NC42NywxLjUxLDEsMi4zcy43OCwxLjY3LDEuMjEsMi41NC45MSwxLjgzLDEuNDEsMi43OSwxLjA4LDIsMS42NywzLjA3TDYxLjQ4LDQ4Yy0uNzgtMS0xLjUxLTEuOTQtMi4yMS0yLjg3cy0xLjMtMS43Ny0xLjkxLTIuNjItMS4xNC0xLjYyLTEuNjctMi40bC0xLjUtMi4yMi0uNjktMS0uNjktMWMtLjIyLS4zMy0uNDUtLjY1LS42OC0xcy0uNDYtLjYzLS43LS45NC0uNDgtLjYtLjc0LS45LS41My0uNTgtLjgzLS44NmExMS40NywxMS40NywwLDAsMC0xLS'+
			'44MywxMSwxMSwwLDAsMC0xLjEyLS43OGMtLjIxLS4xMi0uNDMtLjI1LS42Ni0uMzZzLS40Ny0uMjQtLjczLS4zNWwtLjc4LS4zMmMtLjI3LS4xLS41NC0uMi0uODMtLjI5TDQzLjg3LDI5bC0uOTUtLjIzLTEtLjE5LTEtLjE3cS0xLS4xNC0yLS4yNGMtLjY4LS4wNy0xLjM2LS4xMi0yLS4xN2wtMi0uMS0yLS4wNi0yLjM4LDBIMjguMTJsLTIuMywwLTIuMjgsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image_visited_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_visited_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_visited_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_visited_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_nodeleft.appendChild(me._ht_node_image_visited_1);
		el=me._ht_node_image_1=document.createElement('div');
		els=me._ht_node_image_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjguNDMgMTQuOTkiIGlkPSLlm77lsYJfMSIgZGF0YS1uYW1lPSLlm77lsYIgMSI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTN7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoKTt9LmNscy00e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8Y2xpcFBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuNzUgLTIzLjM2KSIgaWQ9ImNsaXAtcGF0aCI+CiAgIDxwb2'+
			'x5Z29uIHBvaW50cz0iLTIuOTcgMzcuNzMgMTEuOTMgMjMuNTggMzguMzggMjMuMjEgMzMuMTMgMzguNDcgLTIuOTcgMzcuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDwvY2xpcFBhdGg+CiA8L2RlZnM+CiA8dGl0bGU+5bem6L2sMjwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTIiPgogIDxnIGNsYXNzPSJjbHMtMyI+CiAgIDxwb2x5bGluZSBwb2ludHM9IjIyLjA5IDAgMCA2LjA5IDIxLjI4IDE0Ljk5IDI4LjQzIDEyLjA2IDExLjExIDUuODEgMjYuMzcgMS4zOSAyMi4wOSAwIiBjbGFzcz0iY2xzLTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1";
		el.ggParameter={ rx:0,ry:0,a:5,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 5px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_node_image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_node_image_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_node_image_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_node_image_1.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms';
				if (me._ht_node_image_1.ggCurrentLogicStatePosition == 0) {
					me._ht_node_image_1.style.left='-21px';
					me._ht_node_image_1.style.top='-14px';
				}
				else {
					me._ht_node_image_1.style.left='5px';
					me._ht_node_image_1.style.top='-14px';
				}
			}
		}
		me._ht_node_image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_image_1.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 200ms ease 0ms';
				if (me._ht_node_image_1.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_image_1.style.visibility=me._ht_node_image_1.ggVisible?'inherit':'hidden';
					me._ht_node_image_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_image_1.style.opacity == 0.0) { me._ht_node_image_1.style.visibility="hidden"; } }, 205);
					me._ht_node_image_1.style.opacity=0;
				}
			}
		}
		me._ht_node_image_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_nodeleft.appendChild(me._ht_node_image_1);
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=16;
		el.ggDy=48;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 16px 5px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((82-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_nodeleft.appendChild(me._text_1_1);
		me.__div = me._ht_nodeleft;
	};
	function SkinHotspotClass_ht_fj(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_fj=document.createElement('div');
		el.ggId="ht_fj";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_fj.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_fj.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_fj.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_fj.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_fj.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_fj.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_fj=document.createElement('div');
		el.ggId="Rectangle fj";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_fj.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_fj.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fj.appendChild(me._rectangle_fj);
		el=me._text_fj=document.createElement('div');
		els=me._text_fj__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_fj";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -46px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_fj.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_fj.ggUpdatePosition=function (useTransition) {
		}
		me._ht_fj.appendChild(me._text_fj);
		me.__div = me._ht_fj;
	};
	function SkinHotspotClass_ht_bird_out(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_bird_out=document.createElement('div');
		el.ggId="ht_bird_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_bird_out.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_bird_out.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getFov() > 120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_bird_out.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_bird_out.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_bird_out.style[domTransition]='';
				if (me._ht_bird_out.ggCurrentLogicStateVisible == 0) {
					me._ht_bird_out.style.visibility="hidden";
					me._ht_bird_out.ggVisible=false;
				}
				else {
					me._ht_bird_out.style.visibility=(Number(me._ht_bird_out.style.opacity)>0||!me._ht_bird_out.style.opacity)?'inherit':'hidden';
					me._ht_bird_out.ggVisible=true;
				}
			}
		}
		me._ht_bird_out.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird_out.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird_out.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird_out.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_bird_out.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDx=14;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 91px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_4.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._image_4.ggCurrentLogicStateAlpha == 0) {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=0.85;
				}
				else {
					me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
					me._image_4.style.opacity=1;
				}
			}
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_bird_out.appendChild(me._image_4);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #60d4e2;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 56px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=0.2;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_bird_out.appendChild(me._rectangle_1);
		el=me._text_1_3=document.createElement('div');
		els=me._text_1_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_3";
		el.ggDx=15;
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 16px 5px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((82-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_bird_out.appendChild(me._text_1_3);
		me.ggUse3d=true;
		me.gg3dDistance=800;
		me.__div = me._ht_bird_out;
	};
	function SkinHotspotClass_ht_house(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_house=document.createElement('div');
		el.ggId="ht_house";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : 117px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_house.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_house.onclick=function (e) {
			player.openUrl(me.hotspot.url,"_self");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_house.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_house.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_house.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_house.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_house=document.createElement('div');
		el.ggId="Rectangle house";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_house.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_house.ggUpdatePosition=function (useTransition) {
		}
		me._ht_house.appendChild(me._rectangle_house);
		el=me._text_house=document.createElement('div');
		els=me._text_house__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_house";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -46px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_house.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_house.ggUpdatePosition=function (useTransition) {
		}
		me._ht_house.appendChild(me._text_house);
		me.__div = me._ht_house;
	};
	function SkinHotspotClass_ht_jy(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_jy=document.createElement('div');
		el.ggId="ht_jy";
		el.ggDx=-10;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_jy.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_jy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getFov() > 120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_jy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_jy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_jy.style[domTransition]='';
				if (me._ht_jy.ggCurrentLogicStateVisible == 0) {
					me._ht_jy.style.visibility="hidden";
					me._ht_jy.ggVisible=false;
				}
				else {
					me._ht_jy.style.visibility="hidden";
					me._ht_jy.ggVisible=false;
				}
			}
		}
		me._ht_jy.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jy.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jy.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jy.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jy.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_sh0=document.createElement('div');
		el.ggId="Rectangle sh";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(96,212,226,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_sh0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sh0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_jy.appendChild(me._rectangle_sh0);
		el=me._text_sh5=document.createElement('div');
		els=me._text_sh5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #285a7b;';
		hs+='background: rgba(40,90,123,0.745098);';
		hs+='border: 1px solid #f8f8f8;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh5.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_jy.appendChild(me._text_sh5);
		me.ggUse3d=true;
		me.gg3dDistance=650;
		me.__div = me._ht_jy;
	};
	function SkinHotspotClass_ht_yl(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_yl=document.createElement('div');
		el.ggId="ht_yl";
		el.ggDx=-10;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_yl.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_yl.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_yl.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_yl.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_yl.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_yl.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_yl=document.createElement('div');
		el.ggId="Rectangle yl";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(254,184,149,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_yl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_yl.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_yl.appendChild(me._rectangle_yl);
		el=me._text_yl=document.createElement('div');
		els=me._text_yl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_yl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #090909;';
		hs+='background: rgba(9,9,9,0.745098);';
		hs+='border: 1px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_yl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_yl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_yl.appendChild(me._text_yl);
		me.ggUse3d=true;
		me.gg3dDistance=650;
		me.__div = me._ht_yl;
	};
	function SkinHotspotClass_ht_sy(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_sy=document.createElement('div');
		el.ggId="ht_sy";
		el.ggDx=-10;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_sy.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_sy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getFov() > 120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_sy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_sy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_sy.style[domTransition]='';
				if (me._ht_sy.ggCurrentLogicStateVisible == 0) {
					me._ht_sy.style.visibility="hidden";
					me._ht_sy.ggVisible=false;
				}
				else {
					me._ht_sy.style.visibility="hidden";
					me._ht_sy.ggVisible=false;
				}
			}
		}
		me._ht_sy.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_sy.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_sy.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_sy.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_sy.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_sy1=document.createElement('div');
		el.ggId="Rectangle sy";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(236,236,236,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_sy1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sy1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_sy.appendChild(me._rectangle_sy1);
		el=me._text_sy=document.createElement('div');
		els=me._text_sy__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #306232;';
		hs+='background: rgba(48,98,50,0.745098);';
		hs+='border: 1px solid #f3f3f3;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sy.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_sy.appendChild(me._text_sy);
		me.ggUse3d=true;
		me.gg3dDistance=650;
		me.__div = me._ht_sy;
	};
	function SkinHotspotClass_ht_st(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_st=document.createElement('div');
		el.ggId="ht_st";
		el.ggDx=-10;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_st.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_st.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getFov() > 120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_st.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_st.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_st.style[domTransition]='';
				if (me._ht_st.ggCurrentLogicStateVisible == 0) {
					me._ht_st.style.visibility="hidden";
					me._ht_st.ggVisible=false;
				}
				else {
					me._ht_st.style.visibility="hidden";
					me._ht_st.ggVisible=false;
				}
			}
		}
		me._ht_st.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_st.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_st.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_st.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_st.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_sy0=document.createElement('div');
		el.ggId="Rectangle sy";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(238,238,238,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_sy0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sy0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_st.appendChild(me._rectangle_sy0);
		el=me._text_st0=document.createElement('div');
		els=me._text_st0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_st";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #6a406e;';
		hs+='background: rgba(106,64,110,0.745098);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_st0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_st0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_st.appendChild(me._text_st0);
		me.ggUse3d=true;
		me.gg3dDistance=650;
		me.__div = me._ht_st;
	};
	function SkinHotspotClass_ht_jt(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_jt=document.createElement('div');
		el.ggId="ht_jt";
		el.ggDx=-10;
		el.ggDy=-59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_jt.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_jt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getFov() > 120))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_jt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_jt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_jt.style[domTransition]='';
				if (me._ht_jt.ggCurrentLogicStateVisible == 0) {
					me._ht_jt.style.visibility="hidden";
					me._ht_jt.ggVisible=false;
				}
				else {
					me._ht_jt.style.visibility=(Number(me._ht_jt.style.opacity)>0||!me._ht_jt.style.opacity)?'inherit':'hidden';
					me._ht_jt.ggVisible=true;
				}
			}
		}
		me._ht_jt.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jt.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jt.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jt.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jt.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_sy=document.createElement('div');
		el.ggId="Rectangle sy";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(244,244,244,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_sy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sy.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_jt.appendChild(me._rectangle_sy);
		el=me._text_st=document.createElement('div');
		els=me._text_st__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_st";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -44px;';
		hs+='position : absolute;';
		hs+='top : -11px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #794e19;';
		hs+='background: rgba(121,78,25,0.745098);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_st.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_st.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_jt.appendChild(me._text_st);
		me.ggUse3d=true;
		me.gg3dDistance=650;
		me.__div = me._ht_jt;
	};
	function SkinHotspotClass_ht_housetitle_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_1=document.createElement('div');
		el.ggId="ht_housetitle_1";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_1.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_1.ggParameter.sx = 0.5;
					me._ht_housetitle_1.ggParameter.sy = 0.5;
					me._ht_housetitle_1.style[domTransform]=parameterToTransform(me._ht_housetitle_1.ggParameter);
				}
				else {
					me._ht_housetitle_1.ggParameter.sx = 10;
					me._ht_housetitle_1.ggParameter.sy = 10;
					me._ht_housetitle_1.style[domTransform]=parameterToTransform(me._ht_housetitle_1.ggParameter);
				}
			}
		}
		me._ht_housetitle_1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_24=document.createElement('div');
		els=me._image_24__img=document.createElement('img');
		els.className='ggskin ggskin_image_24';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_24.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_24.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_24.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_24.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_24.ggCurrentLogicStateScaling == 0) {
					me._image_24.ggParameter.sx = 0.7;
					me._image_24.ggParameter.sy = 0.7;
					me._image_24.style[domTransform]=parameterToTransform(me._image_24.ggParameter);
				}
				else if (me._image_24.ggCurrentLogicStateScaling == 1) {
					me._image_24.ggParameter.sx = 0.8;
					me._image_24.ggParameter.sy = 0.8;
					me._image_24.style[domTransform]=parameterToTransform(me._image_24.ggParameter);
				}
				else if (me._image_24.ggCurrentLogicStateScaling == 2) {
					me._image_24.ggParameter.sx = 0.9;
					me._image_24.ggParameter.sy = 0.9;
					me._image_24.style[domTransform]=parameterToTransform(me._image_24.ggParameter);
				}
				else {
					me._image_24.ggParameter.sx = 1;
					me._image_24.ggParameter.sy = 1;
					me._image_24.style[domTransform]=parameterToTransform(me._image_24.ggParameter);
				}
			}
		}
		me._image_24.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh4=document.createElement('div');
		els=me._text_sh4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_24.appendChild(me._text_sh4);
		me._ht_housetitle_1.appendChild(me._image_24);
		me.ggUse3d=true;
		me.gg3dDistance=300;
		me.__div = me._ht_housetitle_1;
	};
	function SkinHotspotClass_ht_housetitle_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_2=document.createElement('div');
		el.ggId="ht_housetitle_2";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_2.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_2.ggParameter.sx = 0.5;
					me._ht_housetitle_2.ggParameter.sy = 0.5;
					me._ht_housetitle_2.style[domTransform]=parameterToTransform(me._ht_housetitle_2.ggParameter);
				}
				else {
					me._ht_housetitle_2.ggParameter.sx = 10;
					me._ht_housetitle_2.ggParameter.sy = 10;
					me._ht_housetitle_2.style[domTransform]=parameterToTransform(me._ht_housetitle_2.ggParameter);
				}
			}
		}
		me._ht_housetitle_2.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_23.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_23.ggCurrentLogicStateScaling == 0) {
					me._image_23.ggParameter.sx = 0.7;
					me._image_23.ggParameter.sy = 0.7;
					me._image_23.style[domTransform]=parameterToTransform(me._image_23.ggParameter);
				}
				else if (me._image_23.ggCurrentLogicStateScaling == 1) {
					me._image_23.ggParameter.sx = 0.8;
					me._image_23.ggParameter.sy = 0.8;
					me._image_23.style[domTransform]=parameterToTransform(me._image_23.ggParameter);
				}
				else if (me._image_23.ggCurrentLogicStateScaling == 2) {
					me._image_23.ggParameter.sx = 0.9;
					me._image_23.ggParameter.sy = 0.9;
					me._image_23.style[domTransform]=parameterToTransform(me._image_23.ggParameter);
				}
				else {
					me._image_23.ggParameter.sx = 1;
					me._image_23.ggParameter.sy = 1;
					me._image_23.style[domTransform]=parameterToTransform(me._image_23.ggParameter);
				}
			}
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh3=document.createElement('div');
		els=me._text_sh3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_23.appendChild(me._text_sh3);
		me._ht_housetitle_2.appendChild(me._image_23);
		me.ggUse3d=true;
		me.gg3dDistance=280;
		me.__div = me._ht_housetitle_2;
	};
	function SkinHotspotClass_ht_housetitle_3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_3=document.createElement('div');
		el.ggId="ht_housetitle_3";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_3.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_3.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_3.ggParameter.sx = 0.5;
					me._ht_housetitle_3.ggParameter.sy = 0.5;
					me._ht_housetitle_3.style[domTransform]=parameterToTransform(me._ht_housetitle_3.ggParameter);
				}
				else {
					me._ht_housetitle_3.ggParameter.sx = 10;
					me._ht_housetitle_3.ggParameter.sy = 10;
					me._ht_housetitle_3.style[domTransform]=parameterToTransform(me._ht_housetitle_3.ggParameter);
				}
			}
		}
		me._ht_housetitle_3.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_22.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_22.ggCurrentLogicStateScaling == 0) {
					me._image_22.ggParameter.sx = 0.7;
					me._image_22.ggParameter.sy = 0.7;
					me._image_22.style[domTransform]=parameterToTransform(me._image_22.ggParameter);
				}
				else if (me._image_22.ggCurrentLogicStateScaling == 1) {
					me._image_22.ggParameter.sx = 0.8;
					me._image_22.ggParameter.sy = 0.8;
					me._image_22.style[domTransform]=parameterToTransform(me._image_22.ggParameter);
				}
				else if (me._image_22.ggCurrentLogicStateScaling == 2) {
					me._image_22.ggParameter.sx = 0.9;
					me._image_22.ggParameter.sy = 0.9;
					me._image_22.style[domTransform]=parameterToTransform(me._image_22.ggParameter);
				}
				else {
					me._image_22.ggParameter.sx = 1;
					me._image_22.ggParameter.sy = 1;
					me._image_22.style[domTransform]=parameterToTransform(me._image_22.ggParameter);
				}
			}
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh2=document.createElement('div');
		els=me._text_sh2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_22.appendChild(me._text_sh2);
		me._ht_housetitle_3.appendChild(me._image_22);
		me.ggUse3d=true;
		me.gg3dDistance=250;
		me.__div = me._ht_housetitle_3;
	};
	function SkinHotspotClass_ht_housetitle_4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_4=document.createElement('div');
		el.ggId="ht_housetitle_4";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_4.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_4.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_4.ggParameter.sx = 0.5;
					me._ht_housetitle_4.ggParameter.sy = 0.5;
					me._ht_housetitle_4.style[domTransform]=parameterToTransform(me._ht_housetitle_4.ggParameter);
				}
				else {
					me._ht_housetitle_4.ggParameter.sx = 10;
					me._ht_housetitle_4.ggParameter.sy = 10;
					me._ht_housetitle_4.style[domTransform]=parameterToTransform(me._ht_housetitle_4.ggParameter);
				}
			}
		}
		me._ht_housetitle_4.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_4.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_21.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_21.ggCurrentLogicStateScaling == 0) {
					me._image_21.ggParameter.sx = 0.7;
					me._image_21.ggParameter.sy = 0.7;
					me._image_21.style[domTransform]=parameterToTransform(me._image_21.ggParameter);
				}
				else if (me._image_21.ggCurrentLogicStateScaling == 1) {
					me._image_21.ggParameter.sx = 0.8;
					me._image_21.ggParameter.sy = 0.8;
					me._image_21.style[domTransform]=parameterToTransform(me._image_21.ggParameter);
				}
				else if (me._image_21.ggCurrentLogicStateScaling == 2) {
					me._image_21.ggParameter.sx = 0.9;
					me._image_21.ggParameter.sy = 0.9;
					me._image_21.style[domTransform]=parameterToTransform(me._image_21.ggParameter);
				}
				else {
					me._image_21.ggParameter.sx = 1;
					me._image_21.ggParameter.sy = 1;
					me._image_21.style[domTransform]=parameterToTransform(me._image_21.ggParameter);
				}
			}
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh1=document.createElement('div');
		els=me._text_sh1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_21.appendChild(me._text_sh1);
		me._ht_housetitle_4.appendChild(me._image_21);
		me.ggUse3d=true;
		me.gg3dDistance=200;
		me.__div = me._ht_housetitle_4;
	};
	function SkinHotspotClass_ht_housetitle_3_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_3_1=document.createElement('div');
		el.ggId="ht_housetitle_3_1";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_3_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_3_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_3_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_3_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_3_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_3_1.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_3_1.ggParameter.sx = 0.5;
					me._ht_housetitle_3_1.ggParameter.sy = 0.5;
					me._ht_housetitle_3_1.style[domTransform]=parameterToTransform(me._ht_housetitle_3_1.ggParameter);
				}
				else {
					me._ht_housetitle_3_1.ggParameter.sx = 10;
					me._ht_housetitle_3_1.ggParameter.sy = 10;
					me._ht_housetitle_3_1.style[domTransform]=parameterToTransform(me._ht_housetitle_3_1.ggParameter);
				}
			}
		}
		me._ht_housetitle_3_1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_3_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_20.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_20.ggCurrentLogicStateScaling == 0) {
					me._image_20.ggParameter.sx = 0.7;
					me._image_20.ggParameter.sy = 0.7;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
				else if (me._image_20.ggCurrentLogicStateScaling == 1) {
					me._image_20.ggParameter.sx = 0.8;
					me._image_20.ggParameter.sy = 0.8;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
				else if (me._image_20.ggCurrentLogicStateScaling == 2) {
					me._image_20.ggParameter.sx = 0.9;
					me._image_20.ggParameter.sy = 0.9;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
				else {
					me._image_20.ggParameter.sx = 1;
					me._image_20.ggParameter.sy = 1;
					me._image_20.style[domTransform]=parameterToTransform(me._image_20.ggParameter);
				}
			}
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh0=document.createElement('div');
		els=me._text_sh0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_20.appendChild(me._text_sh0);
		me._ht_housetitle_3_1.appendChild(me._image_20);
		me.ggUse3d=true;
		me.gg3dDistance=230;
		me.__div = me._ht_housetitle_3_1;
	};
	function SkinHotspotClass_ht_housetitle_1_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_housetitle_1_2=document.createElement('div');
		el.ggId="ht_housetitle_1_2";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:10,sy:10 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 234px;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_housetitle_1_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_housetitle_1_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_housetitle_1_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_housetitle_1_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_housetitle_1_2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._ht_housetitle_1_2.ggCurrentLogicStateScaling == 0) {
					me._ht_housetitle_1_2.ggParameter.sx = 0.5;
					me._ht_housetitle_1_2.ggParameter.sy = 0.5;
					me._ht_housetitle_1_2.style[domTransform]=parameterToTransform(me._ht_housetitle_1_2.ggParameter);
				}
				else {
					me._ht_housetitle_1_2.ggParameter.sx = 10;
					me._ht_housetitle_1_2.ggParameter.sy = 10;
					me._ht_housetitle_1_2.style[domTransform]=parameterToTransform(me._ht_housetitle_1_2.ggParameter);
				}
			}
		}
		me._ht_housetitle_1_2.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_housetitle_1_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_sh=document.createElement('div');
		el.ggId="Rectangle sh";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(254,184,149,0.941176);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 0%';
		me._rectangle_sh.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sh.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_housetitle_1_2.appendChild(me._rectangle_sh);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getFov() >= 100))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getFov() >= 90))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getFov() >= 80))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_2.style[domTransition]='' + cssPrefix + 'transform 100ms ease 0ms';
				if (me._image_2.ggCurrentLogicStateScaling == 0) {
					me._image_2.ggParameter.sx = 0.7;
					me._image_2.ggParameter.sy = 0.7;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
				else if (me._image_2.ggCurrentLogicStateScaling == 1) {
					me._image_2.ggParameter.sx = 0.8;
					me._image_2.ggParameter.sy = 0.8;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
				else if (me._image_2.ggCurrentLogicStateScaling == 2) {
					me._image_2.ggParameter.sx = 0.9;
					me._image_2.ggParameter.sy = 0.9;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
				else {
					me._image_2.ggParameter.sx = 1;
					me._image_2.ggParameter.sy = 1;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
			}
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_sh=document.createElement('div');
		els=me._text_sh__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_sh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -34px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 4px 3px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_sh.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_sh.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._image_2.appendChild(me._text_sh);
		me._ht_housetitle_1_2.appendChild(me._image_2);
		me.ggUse3d=true;
		me.gg3dDistance=150;
		me.__div = me._ht_housetitle_1_2;
	};
	function SkinHotspotClass_ht_jg(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_jg=document.createElement('div');
		el.ggId="ht_jg";
		el.ggDx=10;
		el.ggDy=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_jg.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_jg.onclick=function (e) {
			player.openUrl(me.hotspot.url,"_self");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jg.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jg.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jg.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_jg.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs=basePath + 'images/image_9.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -72px;';
		hs+='position : absolute;';
		hs+='top : -85px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._ht_jg.appendChild(me._image_9);
		el=me._text_dt=document.createElement('div');
		els=me._text_dt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text_dt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #feb895;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,215,174,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_dt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_dt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((128-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_jg.appendChild(me._text_dt);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_jg;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_bird') {
			hotspot.skinid = 'ht_bird';
			hsinst = new SkinHotspotClass_ht_bird(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_bird_changenode();;
			me.callChildLogicBlocksHotspot_ht_bird_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_bird_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_noderight') {
			hotspot.skinid = 'ht_noderight';
			hsinst = new SkinHotspotClass_ht_noderight(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_noderight_changenode();;
			me.callChildLogicBlocksHotspot_ht_noderight_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_nodeleft') {
			hotspot.skinid = 'ht_nodeleft';
			hsinst = new SkinHotspotClass_ht_nodeleft(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_nodeleft_changenode();;
			me.callChildLogicBlocksHotspot_ht_nodeleft_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_fj') {
			hotspot.skinid = 'ht_fj';
			hsinst = new SkinHotspotClass_ht_fj(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_bird_out') {
			hotspot.skinid = 'ht_bird_out';
			hsinst = new SkinHotspotClass_ht_bird_out(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_bird_out_changenode();;
			me.callChildLogicBlocksHotspot_ht_bird_out_positionchanged();;
			me.callChildLogicBlocksHotspot_ht_bird_out_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_house') {
			hotspot.skinid = 'ht_house';
			hsinst = new SkinHotspotClass_ht_house(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_jy') {
			hotspot.skinid = 'ht_jy';
			hsinst = new SkinHotspotClass_ht_jy(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_jy_positionchanged();;
		} else
		if (hotspot.skinid=='ht_yl') {
			hotspot.skinid = 'ht_yl';
			hsinst = new SkinHotspotClass_ht_yl(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_sy') {
			hotspot.skinid = 'ht_sy';
			hsinst = new SkinHotspotClass_ht_sy(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_sy_positionchanged();;
		} else
		if (hotspot.skinid=='ht_st') {
			hotspot.skinid = 'ht_st';
			hsinst = new SkinHotspotClass_ht_st(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_st_positionchanged();;
		} else
		if (hotspot.skinid=='ht_jt') {
			hotspot.skinid = 'ht_jt';
			hsinst = new SkinHotspotClass_ht_jt(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_jt_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_1') {
			hotspot.skinid = 'ht_housetitle_1';
			hsinst = new SkinHotspotClass_ht_housetitle_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_1_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_2') {
			hotspot.skinid = 'ht_housetitle_2';
			hsinst = new SkinHotspotClass_ht_housetitle_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_2_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_3') {
			hotspot.skinid = 'ht_housetitle_3';
			hsinst = new SkinHotspotClass_ht_housetitle_3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_3_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_4') {
			hotspot.skinid = 'ht_housetitle_4';
			hsinst = new SkinHotspotClass_ht_housetitle_4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_4_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_3_1') {
			hotspot.skinid = 'ht_housetitle_3_1';
			hsinst = new SkinHotspotClass_ht_housetitle_3_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_3_1_positionchanged();;
		} else
		if (hotspot.skinid=='ht_housetitle_1_2') {
			hotspot.skinid = 'ht_housetitle_1_2';
			hsinst = new SkinHotspotClass_ht_housetitle_1_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_housetitle_1_2_positionchanged();;
		} else
		{
			hotspot.skinid = 'ht_jg';
			hsinst = new SkinHotspotClass_ht_jg(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_bird']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird'].length; i++) {
				hotspotTemplates['ht_bird'][i] = null;
			}
		}
		if(hotspotTemplates['ht_noderight']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_noderight'].length; i++) {
				hotspotTemplates['ht_noderight'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_nodeleft']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_nodeleft'].length; i++) {
				hotspotTemplates['ht_nodeleft'][i] = null;
			}
		}
		if(hotspotTemplates['ht_fj']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_fj'].length; i++) {
				hotspotTemplates['ht_fj'][i] = null;
			}
		}
		if(hotspotTemplates['ht_bird_out']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_bird_out'].length; i++) {
				hotspotTemplates['ht_bird_out'][i] = null;
			}
		}
		if(hotspotTemplates['ht_house']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_house'].length; i++) {
				hotspotTemplates['ht_house'][i] = null;
			}
		}
		if(hotspotTemplates['ht_jy']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_jy'].length; i++) {
				hotspotTemplates['ht_jy'][i] = null;
			}
		}
		if(hotspotTemplates['ht_yl']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_yl'].length; i++) {
				hotspotTemplates['ht_yl'][i] = null;
			}
		}
		if(hotspotTemplates['ht_sy']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_sy'].length; i++) {
				hotspotTemplates['ht_sy'][i] = null;
			}
		}
		if(hotspotTemplates['ht_st']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_st'].length; i++) {
				hotspotTemplates['ht_st'][i] = null;
			}
		}
		if(hotspotTemplates['ht_jt']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_jt'].length; i++) {
				hotspotTemplates['ht_jt'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_1'].length; i++) {
				hotspotTemplates['ht_housetitle_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_2'].length; i++) {
				hotspotTemplates['ht_housetitle_2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_3'].length; i++) {
				hotspotTemplates['ht_housetitle_3'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_4'].length; i++) {
				hotspotTemplates['ht_housetitle_4'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_3_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_3_1'].length; i++) {
				hotspotTemplates['ht_housetitle_3_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_housetitle_1_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_housetitle_1_2'].length; i++) {
				hotspotTemplates['ht_housetitle_1_2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_jg']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_jg'].length; i++) {
				hotspotTemplates['ht_jg'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_point_visited_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._point_visited=document.createElement('div');
		els=me._point_visited__img=document.createElement('img');
		els.className='ggskin ggskin_point_visited';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="point_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._point_visited.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._point_visited.ggUpdatePosition=function (useTransition) {
		}
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._c_menu.logicBlock_visible();
	me._off_17.logicBlock_visible();
	me._off_16.logicBlock_visible();
	me._off_15.logicBlock_visible();
	me._off_14.logicBlock_visible();
	me._off_13.logicBlock_visible();
	me._off_12.logicBlock_visible();
	me._off_11.logicBlock_visible();
	me._off_10.logicBlock_visible();
	me._off_1.logicBlock_visible();
	player.addListener('changenode', function(args) { me._c_menu.logicBlock_visible();me._off_17.logicBlock_visible();me._off_16.logicBlock_visible();me._off_15.logicBlock_visible();me._off_14.logicBlock_visible();me._off_13.logicBlock_visible();me._off_12.logicBlock_visible();me._off_11.logicBlock_visible();me._off_10.logicBlock_visible();me._off_1.logicBlock_visible(); });
	player.addListener('activehotspotchanged', function(args) { me._c_menu.logicBlock_visible();me._off_17.logicBlock_visible();me._off_16.logicBlock_visible();me._off_15.logicBlock_visible();me._off_14.logicBlock_visible();me._off_13.logicBlock_visible();me._off_12.logicBlock_visible();me._off_11.logicBlock_visible();me._off_10.logicBlock_visible();me._off_1.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_bird_changenode();me.callChildLogicBlocksHotspot_ht_noderight_changenode();me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_nodeleft_changenode();me.callChildLogicBlocksHotspot_ht_bird_out_changenode(); });
	player.addListener('positionchanged', function(args) { me.callChildLogicBlocksHotspot_ht_bird_out_positionchanged();me.callChildLogicBlocksHotspot_ht_jy_positionchanged();me.callChildLogicBlocksHotspot_ht_sy_positionchanged();me.callChildLogicBlocksHotspot_ht_st_positionchanged();me.callChildLogicBlocksHotspot_ht_jt_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_1_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_2_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_3_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_4_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_3_1_positionchanged();me.callChildLogicBlocksHotspot_ht_housetitle_1_2_positionchanged(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_bird_changevisitednodes(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_bird_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_noderight_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_node_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_nodeleft_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_bird_out_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};