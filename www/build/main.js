webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TremPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TremPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TremPage = /** @class */ (function () {
    function TremPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TremPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-trem',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\trem\trem.html"*/'<ion-content padding>\n  <div>\n      <ion-grid>\n              <ion-row>\n                      <ion-col>\n                          <ion-item>\n                              <ion-input type="text" [(ngModel)]="notaFiscal" placeholder="Nota Fiscal"></ion-input>\n                          </ion-item>\n                      </ion-col>\n                      <ion-col col-auto>\n                        <button ion-button color="amspec" (click)="openScanner()"><img class="scanner" src="./assets/imgs/barcode-scanner.png" /></button>\n                      </ion-col>\n                  </ion-row>\n              <ion-row>\n              <ion-col>\n                  <ion-item class="inouts">\n                      <ion-select class="inout" placeholder="Recebimento/Saída" interface="alert" (ionChange)="change()"  cancelText="Cancelar" okText="Selecionar">\n                          <ion-option value="in">Recebimento</ion-option>\n                          <ion-option value="out">Saída</ion-option>\n                      </ion-select>  \n                  </ion-item>\n              </ion-col>  \n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="Laudo"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-datetime placeholder="00/00/0000" displayFormat="DD/MM/YYYY" max="{{today}}"></ion-datetime>\n                  </ion-item>\n              </ion-col>\n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="Ord. de Serviço"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="Informe o Cliente"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item class="inouts">\n                      <ion-select class="inout" placeholder="Tipo de Produto" interface="alert"  [(ngModel)]="selected" (ionChange)="change($event)" (ionCancel)="cancel()" cancelText="Cancelar" okText="Selecionar">\n                          <ion-option value="soja">Soja</ion-option>\n                          <ion-option value="milho">Milho</ion-option>\n                          <ion-option value="feijaoBolinhaVermelhoInverno">Feijão Bolinha Vermelho - Inverno</ion-option>\n                          <ion-option value="feijaoBolinhaAmareloInverno">Feijão Bolinha Amarelo - Inverno</ion-option>\n                          <ion-option value="feijaoCariocaInverno">Feijão Carioca - Inverno</ion-option>\n                          <ion-option value="feijaoRajadoInverno">Feijão Rajado - Inverno</ion-option>\n                      </ion-select>  \n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="Município de Origem"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="AAA - 1010"></ion-input>\n                  </ion-item>\n              </ion-col>\n              <ion-col>\n                  <ion-item>\n                      <ion-input type="text" placeholder="Qtde Furos"></ion-input>\n                  </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n                  <ion-col>\n                      <ion-item>\n                          <ion-input type="text" placeholder="Lacre ITK"></ion-input>\n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n      </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\trem\trem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TremPage);
    return TremPage;
}());

//# sourceMappingURL=trem.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tabs/tabs.module": [
		174
	],
	"../pages/transporte/tipo/trem/trem.module": [
		318
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaminhaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__principal_principal__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CaminhaoPage = /** @class */ (function () {
    function CaminhaoPage(barcodeScanner, navParams, funcBasicProv, translate, geolocation, platform, http, app) {
        var _this = this;
        this.barcodeScanner = barcodeScanner;
        this.navParams = navParams;
        this.funcBasicProv = funcBasicProv;
        this.translate = translate;
        this.geolocation = geolocation;
        this.platform = platform;
        this.http = http;
        this.app = app;
        this.msg = "";
        this.desabilitar = false;
        this.notaFiscal = "";
        this.entradaSaida = "";
        this.laudo = "";
        this.data = "";
        this.os = "";
        this.todasOs = [];
        this.cliente = "";
        this.clienteNome = "";
        this.municipio = "Indefinido";
        this.placa1 = "";
        this.placa2 = "";
        this.placa3 = "";
        this.furos = "";
        this.lacres = "";
        this.transporte = "";
        this.placactrl1 = "ios-add-circle-outline";
        this.placactrl2 = "ios-add-circle-outline";
        this.ativa_placa_2 = false;
        this.ativa_placa_3 = false;
        this.funcBasicProv.mostrarLoad();
        platform.registerBackButtonAction(function () { _this.voltar(); }, 1);
        this.getLocation();
        this.buscaOS();
        this.translate.get('escolha.caminhao').subscribe(function (res) {
            _this.transporte = res;
        });
        this.translate.get('toast.campos').subscribe(function (res) {
            _this.msg = res;
        });
        this.translate.get('transporte.textobarcode').subscribe(function (res) {
            _this.barcodeText = res;
        });
        this.barcodeOptions =
            {
                prompt: this.barcodeText
            };
        localStorage.setItem('infoTransport', JSON.stringify(null));
        this.data = this.today = this.funcBasicProv.getDateToday();
        this.funcBasicProv.exitLoad();
        // this.autopreenchido();
    }
    CaminhaoPage.prototype.openScanner = function () {
        var _this = this;
        this.barcodeScanner.scan(this.barcodeOptions).then(function (barcodeData) {
            _this.notaFiscal = barcodeData.text;
        }, function (err) {
            _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao('toast.error'));
        });
    };
    CaminhaoPage.prototype.enviar = function () {
        if (this.notaFiscal === "" && this.notaFiscalDisable == true) {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.entradaSaida === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.data === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.os === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.cliente === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.municipio === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.placa1 === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else if (this.furos === "") {
            this.funcBasicProv.mostrarToast(this.msg);
        }
        else {
            if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.caminhao')) {
                this.nt = '1';
            }
            if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.container')) {
                this.nt = '2';
            }
            if (this.transporte == this.funcBasicProv.buscarTraducao('escolha.trem')) {
                this.nt = '3';
            }
            if (this.entradaSaida == this.funcBasicProv.buscarTraducao('principal.in')) {
                this.nio = '1';
            }
            if (this.entradaSaida == this.funcBasicProv.buscarTraducao('principal.out')) {
                this.nio = '0';
            }
            this.infoTransport =
                {
                    "idUser": localStorage.getItem('idUser'),
                    "idProduto": "",
                    "transporte": this.nt,
                    "tipoTransporte": "'1'",
                    "obs": "",
                    "data": this.funcBasicProv.commentsMySQL(this.data),
                    "notaFiscal": this.notaFiscalcheck(),
                    "cliente": this.funcBasicProv.commentsMySQL(this.clienteNome),
                    "tipo_acao": this.nio,
                    "os": this.funcBasicProv.commentsMySQL(this.os),
                    "cidade": this.funcBasicProv.commentsMySQL(this.municipio),
                    "furos": this.furos,
                    "lacres": this.funcBasicProv.commentsMySQL(this.lacres),
                    "numeracao": this.funcBasicProv.commentsMySQL(this.placa1),
                    "numeracao2": this.funcBasicProv.commentsMySQL(this.placa2),
                    "numeracao3": this.funcBasicProv.commentsMySQL(this.placa3),
                    "pesoamostra": 0
                };
            localStorage.setItem('infoTransport', JSON.stringify(this.infoTransport));
            this.desabilitar = true;
            this.notaFiscalDisable = false;
            this.infoTransportPrint =
                this.funcBasicProv.buscarTraducao('transporte.notaFiscal') + ": " + this.notaFiscal + "\n" +
                    this.funcBasicProv.buscarTraducao('transporte.tipo') + ": " + this.entradaSaida + "\n" +
                    this.funcBasicProv.buscarTraducao('principal.data') + ": " + this.data + "\n" +
                    this.funcBasicProv.buscarTraducao('principal.os') + ": " + this.os + "\n" +
                    this.funcBasicProv.buscarTraducao('laudo.cliente') + ": " + this.clienteNome + "\n" +
                    this.funcBasicProv.buscarTraducao('laudo.municipio') + ": " + this.municipio + "\n" +
                    this.funcBasicProv.buscarTraducao('laudo.placa') + ": " + this.placa1 + "\n";
            if (this.placa2 !== "") {
                this.infoTransportPrint += this.funcBasicProv.buscarTraducao('laudo.placa') + " 2: " + this.placa2 + "\n";
                if (this.placa3 !== "") {
                    this.infoTransportPrint += this.funcBasicProv.buscarTraducao('laudo.placa') + " 3: " + this.placa2 + "\n";
                }
            }
            this.infoTransportPrint +=
                this.funcBasicProv.buscarTraducao('laudo.placa') + " 2: " + this.placa2 + "\n" +
                    this.funcBasicProv.buscarTraducao('laudo.placa') + " 3: " + this.placa3 + "\n" +
                    this.funcBasicProv.buscarTraducao('transporte.furos') + ": " + this.furos + "\n" +
                    this.funcBasicProv.buscarTraducao('transporte.lacres') + ": " + this.lacres + "\n" +
                    "!----------------------\n";
            localStorage.setItem("infoTransportPrint", this.infoTransportPrint);
        }
    };
    CaminhaoPage.prototype.editar = function () {
        this.desabilitar = false;
        this.notaFiscalDisable = true;
        localStorage.setItem('infoTransport', JSON.stringify(null));
    };
    CaminhaoPage.prototype.buscaOS = function () {
        var _this = this;
        var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]() }), url = this.funcBasicProv.DATA_URL + '?acao=buscarTodasOS';
        return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (OS) {
            _this.todasOs = OS;
        });
    };
    CaminhaoPage.prototype.selecionaOs = function (idOs) {
        var index = this.todasOs.findIndex(function (item, i) {
            return item.id == idOs;
        });
        var cliente = this.todasOs[index].cliente;
        var clienteNome = this.todasOs[index].clienteNome;
        var furos = this.todasOs[index].furos;
        this.cliente = cliente;
        this.clienteNome = clienteNome;
        console.log(this.todasOs[index]);
        this.furos = furos;
        this.infoEmpresaPrint =
            "  ! " + this.clienteNome + "\n" +
                "CNPJ: " + this.todasOs[index].cpf + "\n" +
                this.todasOs[index].cidade + " - " + this.todasOs[index].estado + "\n" +
                "!----------------------\n";
        localStorage.setItem("infoEmpresaPrint", this.infoEmpresaPrint);
    };
    CaminhaoPage.prototype.voltar = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__principal_principal__["a" /* PrincipalPage */]);
    };
    CaminhaoPage.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.geolocation.getCurrentPosition().then(function (resp) {
                                var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]() }), 
                                // url: any = "https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?"
                                // +"prox="+resp.coords.latitude+"%2C"+resp.coords.longitude+"%2C50&mode=retrieveAddresses&maxresults=1&gen=8&app_id=YspwSU1nSjhy4GtJdrx4&"
                                // +"app_code=LL5lFruZITuK8MAIv8xMYQ	";
                                url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + resp.coords.latitude + "," + resp.coords.longitude + "&sensor=true";
                                return _this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (local) {
                                    _this.municipio = /*local.Response.View[0].Result[0].Location.Address.Label*/ local.results[1].formatted_address;
                                });
                            }).catch(function (error) {
                                _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao('transporte.erroLocal') + error.message);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // autopreenchido()
    // {
    // 	this.notaFiscal = "8763487264872";
    // 	this.entradaSaida = this.funcBasicProv.buscarTraducao('principal.in');
    // 	this.nio = "1";
    // 	this.cliente = "Eduardo Figueiredo";
    // 	this.os = "1";
    // 	this.placa1 = "AAA-0000";
    // 	this.furos = "3";
    // 	this.lacres = "LC4";
    // }
    CaminhaoPage.prototype.notaFiscalcheck = function () {
        if (this.notaFiscalDisable == false) {
            return null;
        }
        else {
            return this.funcBasicProv.commentsMySQL(this.notaFiscal);
        }
    };
    CaminhaoPage.prototype.controla_placa = function (tipo) {
        if (tipo == 1) {
            if (this.placactrl1 == "ios-add-circle-outline") {
                this.placactrl1 = "ios-remove-circle-outline";
                this.ativa_placa_2 = true;
            }
            else {
                this.ativa_placa_2 = false;
                if (this.ativa_placa_3 == true) {
                    this.ativa_placa_3 = false;
                    this.placactrl2 = "ios-add-circle-outline";
                }
                this.placactrl1 = "ios-add-circle-outline";
            }
        }
        else {
            if (this.placactrl2 == "ios-add-circle-outline") {
                this.placactrl2 = "ios-remove-circle-outline";
                this.ativa_placa_3 = true;
            }
            else {
                this.ativa_placa_3 = false;
                this.placactrl2 = "ios-add-circle-outline";
            }
        }
    };
    CaminhaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-caminhao',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\caminhao\caminhao.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button (click)="voltar()">\n            <ion-icon name="ios-arrow-back"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n<ion-content padding scroll="false">\n    <div>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-auto style="display: flex; align-items: center;">\n                    <ion-toggle [(ngModel)]="notaFiscalDisable" [disabled]="desabilitar"></ion-toggle>\n                </ion-col>\n                <ion-col>\n                    <ion-row>\n                        <ion-input type="number" [disabled]="!notaFiscalDisable" [(ngModel)]="notaFiscal" placeholder="{{\'transporte.notaFiscal\' | translate}}"></ion-input>\n                    </ion-row>\n                </ion-col>\n                <ion-col col-auto>\n                    <button ion-button color="amspec" [disabled]="!notaFiscalDisable" (click)="openScanner()">\n                        <ion-icon name="ai-scanning-barcode"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-row class="inouts">\n                        <ion-select class="inout" [disabled]="desabilitar" placeholder="{{\'principal.inout\' | translate}}" interface="alert" cancelText="{{\'cancelText\' | translate}}"\n                            okText="{{\'okText\' | translate}}" [(ngModel)]="entradaSaida" [selectOptions]=\'this.funcBasicProv.selectOptions("selectOptions.RecSai.subtitulo","ios")\'>\n                            <ion-option value="{{\'principal.in\' | translate}}">{{\'principal.in\' | translate}}</ion-option>\n                            <ion-option value="{{\'principal.out\' | translate}}">{{\'principal.out\' | translate}}</ion-option>\n                        </ion-select>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-row>\n                        <ion-select (ionChange)="selecionaOs(os)" class="inout" placeholder="{{\'principal.os\' | translate}}" interface="alert" [(ngModel)]="os" [disabled]="desabilitar"\n                            cancelText="{{\'cancelText\' | translate}}" okText="{{\'okText\' | translate}}" [selectOptions]=\'this.funcBasicProv.selectOptions("selectOptions.OS.subtitulo","ios")\'>\n                            <ion-option *ngFor="let osu of todasOs" [value]="osu.id">{{osu.numOS}}</ion-option>\n                        </ion-select>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-row>\n                        <ion-input type="text" [disabled]="true" placeholder="{{\'transporte.cliente\' | translate}}" [(ngModel)]="clienteNome" uppercase></ion-input>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-row>\n                        <ion-textarea type="text" [disabled]="true" placeholder="{{\'transporte.cidade\' | translate}}" [(ngModel)]="municipio" uppercase></ion-textarea>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row>       \n                <ion-input col-11 type="text" [disabled]="desabilitar" [brmasker]="{mask:\'AAA-0000\', len:8}" placeholder="{{\'principal.placa\' | translate}}" [(ngModel)]="placa1" uppercase></ion-input>\n                <ion-icon col-1 [name]="placactrl1" color="secondary" (click)="controla_placa(1);" class="addicon"></ion-icon>\n            </ion-row>\n            <ion-row *ngIf="ativa_placa_2">       \n                <ion-input col-11 type="text" [disabled]="desabilitar" [brmasker]="{mask:\'AAA-0000\', len:8}" placeholder="{{\'principal.placa\' | translate}}" [(ngModel)]="placa2" uppercase></ion-input>\n                <ion-icon  col-1 [name]="placactrl2" color="secondary" class="addicon" (click)="controla_placa(2);"></ion-icon>\n            </ion-row>\n            <ion-row *ngIf="ativa_placa_3">       \n                <ion-input col-9 type="text" [disabled]="desabilitar" [brmasker]="{mask:\'AAA-0000\', len:8}" placeholder="{{\'principal.placa\' | translate}}" [(ngModel)]="placa3" uppercase></ion-input>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-row>\n                        <ion-input type="text" [disabled]="desabilitar" placeholder="{{\'transporte.lacres\' | translate}}" [(ngModel)]="lacres" uppercase></ion-input>\n                    </ion-row>\n                </ion-col>\n                <ion-col>\n                    <ion-row>\n                        <ion-input type="number" [disabled]="desabilitar" placeholder="{{\'transporte.furos\' | translate}}" [(ngModel)]="furos"></ion-input>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n<ion-footer style="background-color: #FFF;">\n    <ion-row *ngIf="!desabilitar">\n        <ion-col>\n            <button ion-button full (click)="enviar()">{{\'transporte.confirmarinfo\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col *ngIf="desabilitar">\n            <button ion-button full color="cinza" (click)="editar()">{{\'transporte.editarinfo\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\caminhao\caminhao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], CaminhaoPage);
    return CaminhaoPage;
}());

//# sourceMappingURL=caminhao.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncoesBasicasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FuncoesBasicasProvider = /** @class */ (function () {
    function FuncoesBasicasProvider(toastCtrl, loadingCtrl, http, translate) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.translate = translate;
        this.DATA_URL = "http://sbr-smartfile.com.br/trocaNota/webservice.php";
    }
    //função que retorna a data atual
    FuncoesBasicasProvider.prototype.getDateToday = function () {
        var dataNow = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('YYYY-MM-DD');
        return dataNow;
    };
    //função que mostra uma mensagem por toast
    FuncoesBasicasProvider.prototype.mostrarToast = function (msg) {
        if (msg === 'erro') {
            this.translate.get('toast.errorMessage').subscribe(function (res) {
                msg = res;
            });
        }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    //função que mostra um load na tela
    FuncoesBasicasProvider.prototype.mostrarLoad = function () {
        this.loadSpinner = this.loadingCtrl.create({
            spinner: 'crescent',
            dismissOnPageChange: true
        });
        this.loadSpinner.present();
    };
    FuncoesBasicasProvider.prototype.exitLoad = function () {
        this.loadSpinner.dismiss();
    };
    FuncoesBasicasProvider.prototype.mostrarLoadBLESearch = function () {
        var _this = this;
        this.translate.get('ble.search').subscribe(function (res) {
            _this.load = res;
        });
        var loader = this.loadingCtrl.create({
            content: this.load,
            duration: 5000
        });
        loader.present();
    };
    //função que transforma uma data dateTime para dd/mm/aaaa
    FuncoesBasicasProvider.prototype.transformaData = function () {
        var dataNow;
        if (localStorage.getItem("linguagem") == 'en')
            dataNow = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('MM/DD/YYYY');
        else
            dataNow = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format('DD/MM/YYYY');
        return dataNow;
    };
    FuncoesBasicasProvider.prototype.buscarTraducao = function (path) {
        var _this = this;
        this.translate.get(path).subscribe(function (res) {
            _this.msg = res;
        });
        return this.msg;
    };
    FuncoesBasicasProvider.prototype.commentsMySQL = function (stringValue) {
        return "'" + stringValue + "'";
    };
    FuncoesBasicasProvider.prototype.selectOptions = function (subTitle, mode) {
        return {
            subTitle: this.buscarTraducao(subTitle)
        };
    };
    FuncoesBasicasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], FuncoesBasicasProvider);
    return FuncoesBasicasProvider;
}());

//# sourceMappingURL=funcoes-basicas.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscolhaPage = /** @class */ (function () {
    function EscolhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EscolhaPage.prototype.selectTruck = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { escolha: "CaminhaoPage" });
    };
    EscolhaPage.prototype.selectContainer = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { escolha: "ContainerPage" });
    };
    EscolhaPage.prototype.selectTrem = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { escolha: "TremPage" });
    };
    EscolhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-escolha',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\escolha\escolha.html"*/'<ion-content  class="card-background-page">\n  <ion-card (click)="selectTruck()">\n    <img class="blur" src="./assets/imgs/truck.jpg"/>\n    <div class="card-title">{{\'escolha.caminhao\' | translate}}</div>\n  </ion-card>\n  <ion-card>\n    <img class="blur" src="./assets/imgs/container.jpg"/>\n    <div class="card-title">{{\'breve\' | translate}}</div>\n  </ion-card>\n  <ion-card>\n    <img class="blur" src="./assets/imgs/trem.jpg"/>\n    <div class="card-title">{{\'breve\' | translate}}</div>\n  </ion-card>\n</ion-content> '/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\escolha\escolha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EscolhaPage);
    return EscolhaPage;
}());

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PesquisaPage = /** @class */ (function () {
    function PesquisaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PesquisaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pesquisa',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\pesquisa\pesquisa.html"*/'<ion-header color="primary" align="center">\n  <ion-navbar>\n    <ion-title>{{\'pesquisa.laudo\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\pesquisa\pesquisa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PesquisaPage);
    return PesquisaPage;
}());

//# sourceMappingURL=pesquisa.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_print_print__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, navParams, funcBasicProv, printProvider, modalCtrl, blue, alertCtrl, http, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.funcBasicProv = funcBasicProv;
        this.printProvider = printProvider;
        this.modalCtrl = modalCtrl;
        this.blue = blue;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.selectedPrinter = [];
        this.infoClassificacao = [];
        this.desabilitar = false;
        this.produto = "";
        this.jsonObj = [];
        this.leituras = [];
        this.leiturasStatus = [];
        this.fatores = [];
        this.isEnabled = true;
        this.msg = this.funcBasicProv.buscarTraducao('toast.campos');
        localStorage.setItem('infoClassificacao', JSON.stringify(null));
        this.buscarProdutos();
        this.blue.turnOn();
        // this.blue.isEnabled = false;
    }
    ProdutoPage.prototype.buscarFatores = function () {
        var _this = this;
        this.leituras = [];
        this.leiturasStatus = [];
        try {
            var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new URLSearchParams() }), url = this.funcBasicProv.DATA_URL + '?acao=buscarFatores' + '&idProduto=' + this.produto;
            return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (fatores) {
                // criando o peso da amostra pra aparecer na tela
                var pesoAmostra = [];
                pesoAmostra["nome"] = _this.funcBasicProv.buscarTraducao('pesoAmostra');
                // adicionando nos fatores
                _this.fatores.push(pesoAmostra);
                _this.leituras[0] = "";
                _this.leiturasStatus[0] = false;
                if (_this.fatores.length > 0) {
                    for (var index = 0; index < fatores.length; index++) {
                        // adicionando outros fatores
                        _this.fatores.push(fatores[index]);
                        _this.leituras[index + 1] = "";
                        _this.leiturasStatus[index + 1] = false;
                        _this.createJSON(_this.fatores[index + 1].nome);
                    }
                    // this.autopreenchido();
                }
            });
        }
        catch (errorMessage) {
            this.funcBasicProv.mostrarToast("erro");
        }
    };
    ProdutoPage.prototype.autopreenchido = function () {
        try {
            this.leituras[0] = "144.0";
            this.leituras[1] = "13.3";
            this.leituras[2] = "43.4";
            this.leituras[3] = "13.7";
            this.leituras[4] = "2.40";
            this.leituras[5] = "6.50";
            this.leituras[6] = "8.54";
            this.leituras[7] = "4.30";
            this.leituras[8] = "9.64";
        }
        catch (error) { }
    };
    ProdutoPage.prototype.enviarDados = function () {
        if (this.fatores != "") {
            this.infoClassificacao = {};
            localStorage.setItem('produto', this.produto);
            var n;
            for (var index = 0; index < this.produtos.length; index++) {
                var element = this.produtos[index];
                if (this.produtos[index].idproduto == this.produto) {
                    n = index;
                }
            }
            this.infoClassificacaoPrint = this.funcBasicProv.buscarTraducao('principal.produto') + ": " + this.produtos[n].nome + "\n";
            ;
            // começar pelo 1 pois o zero é o peso da amostra
            for (var index = 1; index < this.fatores.length; index++) {
                var element = this.leituras[index];
                if (element == "") {
                    this.infoClassificacao = null;
                    index = this.leituras.length + 1;
                }
                else {
                    var jsonfator = {};
                    jsonfator["idFatorValor"] = this.fatores[index].idFator + "," + element;
                    this.infoClassificacao[index] = jsonfator;
                    if (index == 1) {
                        this.infoClassificacaoPrint += this.fatores[0].nome + ": " + this.leituras[0] + "g\n";
                    }
                    this.infoClassificacaoPrint += this.fatores[index].nome + ": " + element + "%\n";
                }
            }
            this.infoClassificacaoPrint += "!----------------------\n";
            if (this.infoClassificacao == null) {
                this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.campos'));
            }
            else {
                // gravando o peso na memória para usar depois
                var jsonTransport = JSON.parse(localStorage.getItem('infoTransport'));
                jsonTransport.pesoamostra = this.leituras[0];
                localStorage.setItem('infoTransport', JSON.stringify(jsonTransport));
                localStorage.setItem('infoClassificacao', JSON.stringify(this.infoClassificacao));
                localStorage.setItem('infoClassificacaoPrint', this.infoClassificacaoPrint);
                this.desabilitar = true;
            }
        }
        else {
            this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.campos'));
        }
    };
    ProdutoPage.prototype.editar = function () {
        localStorage.setItem('infoClassificacao', JSON.stringify(null));
        this.desabilitar = false;
    };
    ProdutoPage.prototype.buscarProdutos = function () {
        var _this = this;
        try {
            //declarando parametros de conexão
            var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new URLSearchParams() }), url = this.funcBasicProv.DATA_URL + "?acao=buscarProdutos";
            return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (produtos) {
                _this.produtos = produtos;
            });
        }
        catch (errorMessage) {
            this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.errorMessage'));
        }
    };
    ProdutoPage.prototype.getDadosFator = function (fator, i) {
        var _this = this;
        // Executar se o fator não tiver sido lido ainda
        if (!this.leiturasStatus[i]) {
            // se não estiver conectado em nenhum dispositivo
            if (this.blue.espMac == undefined || this.blue.espMac == null || this.blue.espMac == "") {
                alert(this.funcBasicProv.buscarTraducao('ble.noDevice'));
            }
            else {
                //verificar se é o peso da amostra ou umidade. OBS: Ta assim provisóriamente pra não ter que mudar nada no banco.
                if (fator == this.fatores[0].nome || fator == "UMIDADE") {
                    this.blue.fatorToValue(this.blue.espMac, fator);
                    this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(function (buffer) {
                        //  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
                        if (parseFloat(_this.blue.ab2str(buffer)) == 0) {
                            _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('ble.error')));
                        }
                        else {
                            _this.leituras[i] = parseFloat(_this.blue.ab2str(buffer));
                            _this.leiturasStatus[i] = true;
                            _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
                            return true;
                        }
                    }, function (wrong) {
                        _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('toast.error') + wrong));
                    });
                }
                else {
                    //se o peso da amostra estiver nulo não pode fazer os fatores pois vai dar pau na regra de 3
                    if (this.leituras[0] == "" || this.leituras[0] == null || this.leituras[0] == undefined) {
                        this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.semPeso')));
                    }
                    else {
                        // se não for impureza. OBS: Ta assim provisóriamente pra não ter que mudar nada no banco.
                        if (fator != "IMPUREZAS") {
                            // se a impureza não estiver preenchida ele alerta
                            if (this.leituras[2] == "" || this.leituras[2] == null || this.leituras[2] == undefined) {
                                this.funcBasicProv.mostrarToast((this.funcBasicProv.buscarTraducao('toast.semImpureza')));
                            }
                            else {
                                this.blue.fatorToValue(this.blue.espMac, fator);
                                this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(function (buffer) {
                                    //  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
                                    if (parseFloat(_this.blue.ab2str(buffer)) == 0) {
                                        _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('ble.error')));
                                    }
                                    else {
                                        //inserindo com a regra de tres
                                        _this.leituras[i] = ((parseFloat(_this.blue.ab2str(buffer)) * 100) / _this.leituras[0]).toFixed(2);
                                        _this.leiturasStatus[i] = true;
                                        _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
                                        return true;
                                    }
                                }, function (wrong) {
                                    _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('toast.error') + wrong));
                                });
                            }
                        }
                        else {
                            this.blue.fatorToValue(this.blue.espMac, fator);
                            this.blue.ble.startNotification(this.blue.espMac, this.blue.macNotifyWrite1, this.blue.macNotifyWrite3).subscribe(function (buffer) {
                                //  se vier leitura zero avisa que ocorreu erro (está acontecendo esse bug na caixa)
                                if (parseFloat(_this.blue.ab2str(buffer)) == 0) {
                                    _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('ble.error')));
                                }
                                else {
                                    //inserindo com a regra de tres
                                    _this.leituras[i] = ((parseFloat(_this.blue.ab2str(buffer)) * 100) / _this.leituras[0]).toFixed(2);
                                    // retira o valor das impurezas do total
                                    _this.leituras[0] = _this.leituras[0] - parseFloat(_this.blue.ab2str(buffer));
                                    _this.leiturasStatus[i] = true;
                                    _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao('toast.valorRecebido'));
                                    return true;
                                }
                            }, function (wrong) {
                                _this.funcBasicProv.mostrarToast((_this.funcBasicProv.buscarTraducao('toast.error') + wrong));
                            });
                        }
                    }
                }
            }
        }
        else {
            this.funcBasicProv.mostrarToast(this.funcBasicProv.buscarTraducao('toast.lido'));
        }
    };
    ProdutoPage.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.funcBasicProv.mostrarLoadBLESearch();
                this.blue.scanBLE();
                return [2 /*return*/];
            });
        });
    };
    ProdutoPage.prototype.createJSON = function (fator) {
        var item = {};
        item[fator] = "";
        this.jsonObj.push(item);
        return this.jsonObj;
    };
    ProdutoPage.prototype.padrao = function (padrao, valor) {
        if (padrao) {
            if (parseFloat(padrao) >= parseFloat(valor)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\produto\produto.html"*/'<ion-header no-shadow no-border>\n        <ion-card class="factors">\n                <ion-row>\n                    <ion-col>\n                        <ion-item class="inouts">\n                            <ion-select class="inout" placeholder="&ensp;{{\'classificacao.tipoproduto\' | translate}}" interface="alert"  \n                                [(ngModel)]="produto" cancelText="{{\'cancelText\' | translate}}" okText="{{\'okText\' | translate}}" (ionChange)="buscarFatores()"\n                                [selectOptions]=\'this.funcBasicProv.selectOptions("selectOptions.Produtos.subtitulo","ios")\' [disabled]="this.blue.isEnabled">\n                                <ion-option *ngFor="let produto of produtos" [value]="produto.idproduto">&ensp;{{produto.nome}}</ion-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n</ion-header>\n<ion-content padding>\n    <div style="height: 100%;">\n        <table style="height: 100%;">\n            <tr *ngFor="let fator of fatores; let i = index;" [attr.data-index]="i" (press)="getDadosFator(fator.nome,i)">\n                <td class="factorName"><p>{{fator.nome}}</p></td>\n                <td class="factor_green" *ngIf="padrao(fator.padrao, leituras[i])"><p>{{leituras[i]}}</p></td>\n                <td class="factor_red" *ngIf="!padrao(fator.padrao, leituras[i])"><p>{{leituras[i]}}</p></td>\n                <td class="unity" *ngIf="fator.nome != funcBasicProv.buscarTraducao(\'pesoAmostra\')">%</td>\n                <td class="unity" *ngIf="fator.nome == funcBasicProv.buscarTraducao(\'pesoAmostra\')">g</td>\n            </tr>\n        </table>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-row *ngIf="!desabilitar">\n        <ion-col>\n            <button ion-button full (click)="enviarDados()">{{\'transporte.confirmarinfo\' | translate}}</button>\n        </ion-col>\n        <ion-col *ngIf="this.blue.isEnabled">\n            <button ion-button full color="cinza" (click)="connect()">{{\'transporte.conectaCaixa\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col *ngIf="desabilitar">\n            <button ion-button full color="select" (click)="editar()">{{\'transporte.editarinfo\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\produto\produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_print_print__["a" /* PrintProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BluetoothProvider = /** @class */ (function () {
    function BluetoothProvider(alertCtrl, basicFuncProv, ble, openNativeSettings, actionSheetCtrl) {
        this.alertCtrl = alertCtrl;
        this.basicFuncProv = basicFuncProv;
        this.ble = ble;
        this.openNativeSettings = openNativeSettings;
        this.actionSheetCtrl = actionSheetCtrl;
        this.fator = "";
        this.macNotifyWrite1 = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"; //Notification & Write
        this.macNotifyWrite2 = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"; //Write 
        this.macNotifyWrite3 = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"; //Notification
        this.buttons = [];
        this.isEnabled = true;
    }
    BluetoothProvider.prototype.connectBLE = function (macESP, name) {
        var _this = this;
        this.ble.connect(macESP).subscribe(function (peripheralData) {
            _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('ble.connectOn') + name);
            _this.isEnabled = false;
        }, function (peripheralData) {
            _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('ble.notPossible') + name);
            _this.ble.disconnect(macESP);
            _this.ble.stopNotification(macESP, _this.macNotifyWrite1, _this.macNotifyWrite3);
            _this.isEnabled = true;
        });
    };
    BluetoothProvider.prototype.scanBLE = function () {
        var _this = this;
        if (this.espMac != null && this.espMac != undefined && this.espMac != "") {
            this.ble.disconnect(this.espMac);
            this.buttons = [];
            var devices = [];
            this.ble.startScan([]).subscribe(function (device) {
                devices.push(device);
            }, function (error) {
                _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('toast.error') + JSON.stringify(error));
            });
            setTimeout(function () {
                _this.ble.stopScan().then(function () {
                    if (devices != null || devices != []) {
                        var _loop_1 = function (index) {
                            _this.buttons.push({
                                text: devices[index].name,
                                role: devices[index].name,
                                handler: function () {
                                    _this.connectBLE(devices[index].id, devices[index].name);
                                    _this.espMac = devices[index].id;
                                }
                            });
                        };
                        for (var index = 0; index < devices.length; index++) {
                            _loop_1(index);
                        }
                        _this.presentActionSheet(_this.buttons);
                    }
                    else {
                        _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('toast.onNoBLEFound'));
                    }
                });
            }, 5000);
        }
        else {
            this.ble.disconnect(this.espMac);
            this.buttons = [];
            var devices = [];
            this.ble.startScan([]).subscribe(function (device) {
                devices.push(device);
            }, function (error) {
                _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('toast.error') + JSON.stringify(error));
            });
            setTimeout(function () {
                _this.ble.stopScan().then(function () {
                    if (devices != null || devices != []) {
                        var _loop_2 = function (index) {
                            _this.buttons.push({
                                text: devices[index].name,
                                role: devices[index].name,
                                handler: function () {
                                    _this.connectBLE(devices[index].id, devices[index].name);
                                    _this.espMac = devices[index].id;
                                }
                            });
                        };
                        for (var index = 0; index < devices.length; index++) {
                            _loop_2(index);
                        }
                        _this.presentActionSheet(_this.buttons);
                    }
                    else {
                        _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('toast.onNoBLEFound'));
                    }
                });
            }, 5000);
        }
    };
    BluetoothProvider.prototype.str2ab = function (str) {
        var buf = new ArrayBuffer(str.length * 2);
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    };
    BluetoothProvider.prototype.fatorToValue = function (address, fator) {
        var _this = this;
        this.ble.write(address, this.macNotifyWrite1, this.macNotifyWrite2, this.str2ab(fator)).then(function (dataz) {
            _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('ble.fator'));
        }, function (errx) {
            alert(_this.basicFuncProv.buscarTraducao('toast.error') + JSON.stringify(errx));
        });
    };
    BluetoothProvider.prototype.ab2str = function (buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    };
    BluetoothProvider.prototype.turnOn = function () {
        var _this = this;
        this.ble.isEnabled().then(function (on) {
            //this.basicFuncProv.mostrarToast("BlueTooth on");
        }, function (off) {
            _this.basicFuncProv.mostrarToast("Bluetooth OFF");
            _this.ble.enable().then(function (success) {
                _this.basicFuncProv.mostrarToast("Bluetooth ON");
            }, function (error) {
                _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao('toast.error') + JSON.stringify(error));
            });
        });
    };
    BluetoothProvider.prototype.presentActionSheet = function (buttons) {
        var actionSheet = this.actionSheetCtrl.create({
            title: this.basicFuncProv.buscarTraducao('ble.seleciona'),
            buttons: buttons
        });
        actionSheet.present();
    };
    BluetoothProvider.prototype.globalVar = function () {
        return this.isEnabled;
    };
    BluetoothProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], BluetoothProvider);
    return BluetoothProvider;
}());

//# sourceMappingURL=bluetooth.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassificadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foto_foto__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__principal_principal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__laudo_laudo__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64_to_gallery__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ClassificadorPage = /** @class */ (function () {
    function ClassificadorPage(app, navCtrl, navParams, camera, basicFuncProv, translate, transfer, file, loadingCtrl, http, actionSheetCtrl, base64ToGallery) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.basicFuncProv = basicFuncProv;
        this.translate = translate;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.base64ToGallery = base64ToGallery;
        this.observacoes = "";
        this.canShare = true;
        this.invitedLaudo = false;
        //ARRAY ONDE SERÃO ARMAZENADAS AS IMAGENS
        this.images = [];
        this.themeColor = "#4fb700";
        this.themeColors = ["#821D25", "#821D25", "#821D25", "#821D25", "#821D25", "#821D25", "#821D25", "#821D25"];
        this.fileTransfer = this.transfer.create();
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.msgTransporte = this.basicFuncProv.buscarTraducao('toast.msgTransporte');
        this.msgClassificacao = this.basicFuncProv.buscarTraducao('toast.msgClassificacao');
        this.msgTransClass = this.basicFuncProv.buscarTraducao('toast.msgTransClass');
        this.msgEnviar = this.basicFuncProv.buscarTraducao('toast.msgEnviar');
        this.textButton = this.basicFuncProv.buscarTraducao('classificador.emitir');
    }
    ClassificadorPage.prototype.exit = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__principal_principal__["a" /* PrincipalPage */]);
    };
    ClassificadorPage.prototype.novoLaudo = function () {
        this.infoTransport = JSON.parse(localStorage.getItem('infoTransport'));
        this.infoClassificacao = JSON.parse(localStorage.getItem('infoClassificacao'));
        this.infoClassificacao = localStorage.getItem('infoClassificacao');
        if (this.infoTransport == null && this.infoClassificacao == null) {
            this.basicFuncProv.mostrarToast(this.msgTransClass);
        }
        else if (this.infoTransport == null) {
            this.basicFuncProv.mostrarToast(this.msgTransporte);
        }
        else if (this.infoClassificacao == null) {
            this.basicFuncProv.mostrarToast(this.msgClassificacao);
        }
        if (this.infoClassificacao != null && this.infoTransport != null) {
            if (this.observacoes == "") {
                this.observacoes = this.basicFuncProv.buscarTraducao('laudo.obs');
            }
            this.infoTransport["idProduto"] = localStorage.getItem('produto');
            this.infoTransport["obs"] = this.basicFuncProv.commentsMySQL(this.observacoes);
            this.infoTransport = JSON.stringify(this.infoTransport);
            this.infoObsPrint =
                "\n" + this.basicFuncProv.buscarTraducao('laudo.auditado') + ": " + localStorage.getItem('nome') + "\n" +
                    this.basicFuncProv.buscarTraducao('classificador.obs') + ": " + this.observacoes + "\n" +
                    "!---------------------\n";
            localStorage.setItem('infoObsPrint', this.infoObsPrint);
            this.basicFuncProv.mostrarToast(this.msgEnviar);
            this.enviarLaudo();
        }
    };
    // upload da imagem
    ClassificadorPage.prototype.uploadFile = function (imageURI, number, idLaudo) {
        var _this = this;
        var url = encodeURI('http://www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/upload.php?idLaudo=' + idLaudo);
        var loader = this.loadingCtrl.create({
            content: "..."
        });
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: 'image' + number + '.jpeg',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(imageURI, url, options)
            .then(function (data) {
            loader.dismiss();
            _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao("optionsPhoto.photo") + number + _this.basicFuncProv.buscarTraducao("optionsPhoto.sendImage"));
        }, function (err) {
            loader.dismiss();
            _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao("optionsPhoto.sendImageError") + number);
        });
    };
    //envia o laudo para o servidor
    ClassificadorPage.prototype.enviarLaudo = function () {
        var _this = this;
        if (this.invitedLaudo == false) {
            try {
                var imageNumber_1 = 1;
                //declarando parâmetros de conexão
                var type = 'application/x-www-form-urlencoded; charset=UTF-8', headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new URLSearchParams() }), url = this.basicFuncProv.DATA_URL + '?acao=enviarLaudo&infoTransporte=' + this.infoTransport + '&infoClassificacao=' + this.infoClassificacao;
                this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (resposta) {
                    for (var index = 0; index < _this.images.length; index++) {
                        _this.uploadFile(_this.images[index], imageNumber_1, resposta);
                        imageNumber_1++;
                    }
                    imageNumber_1 = 1;
                    localStorage.setItem('idLaudo', resposta);
                    _this.invitedLaudo = true;
                    _this.textButton = _this.basicFuncProv.buscarTraducao('classificador.voltar');
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__laudo_laudo__["a" /* LaudoPage */]);
                });
            }
            catch (errorMessage) {
                //se não houver conexão de internet informa ao usuário
                this.basicFuncProv.buscarTraducao("erro");
            }
        }
        else if (this.invitedLaudo == true) {
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__laudo_laudo__["a" /* LaudoPage */]);
        }
    };
    //pega a imagem tirada e armazena em uma array
    ClassificadorPage.prototype.photo = function (index) {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.images[index] = 'data:image/jpeg;base64,' + imageData;
            _this.themeColors[index] = "#4fb700";
        }, function (err) {
            _this.images[index] = _this.images[index];
        });
    };
    //manda a imagem tirada para a page FotoPage para ser visualizada
    ClassificadorPage.prototype.seePhoto = function (index) {
        if (this.images[index] != undefined) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__foto_foto__["a" /* FotoPage */], {
                base64Image: this.images[index]
            });
        }
        else {
            this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.seeError"));
        }
    };
    //remove a foto da array
    ClassificadorPage.prototype.removePhoto = function (index) {
        this.images[index] = undefined;
        this.themeColors[index] = "#821D25";
    };
    //salva a foto tirada na galeria
    ClassificadorPage.prototype.savePhoto = function (index) {
        var _this = this;
        if (this.images[index] != undefined) {
            var image = this.images[index].replace("data:image/jpeg;base64,", "");
            this.base64ToGallery.base64ToGallery(image).then(function (res) { return _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao("optionsPhoto.saveOk")); }, function (err) { return _this.basicFuncProv.mostrarToast(_this.basicFuncProv.buscarTraducao("optionsPhoto.saveError")); });
        }
        else {
            this.basicFuncProv.mostrarToast(this.basicFuncProv.buscarTraducao("optionsPhoto.seeError"));
        }
    };
    ClassificadorPage.prototype.optionsPhoto = function (index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: this.basicFuncProv.buscarTraducao("optionsPhoto.see"),
                    handler: function () {
                        _this.seePhoto(index);
                    }
                },
                {
                    text: this.basicFuncProv.buscarTraducao("optionsPhoto.remove"),
                    handler: function () {
                        _this.removePhoto(index);
                    }
                },
                {
                    text: this.basicFuncProv.buscarTraducao("optionsPhoto.save"),
                    handler: function () {
                        _this.savePhoto(index);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClassificadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-classificador',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\classificador\classificador.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-item>\n      <ion-label color="primary" stacked>{{\'classificador.obs\' | translate}}</ion-label> \n      <ion-textarea [(ngModel)]="observacoes" rows="10"></ion-textarea>\n    </ion-item>\n  </ion-row>\n  <ion-item>\n    <ion-row>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[0]}" (tap)="photo(0)" (press)="optionsPhoto(0)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[1]}" (tap)="photo(1)" (press)="optionsPhoto(1)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[2]}" (tap)="photo(2)" (press)="optionsPhoto(2)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[3]}" (tap)="photo(3)" (press)="optionsPhoto(3)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[4]}" (tap)="photo(4)" (press)="optionsPhoto(4)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[5]}" (tap)="photo(5)" (press)="optionsPhoto(5)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[6]}" (tap)="photo(6)" (press)="optionsPhoto(6)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col align="center">\n        <button class="buttonCam" [ngStyle]="{\'background-color\': themeColors[7]}" (tap)="photo(7)" (press)="optionsPhoto(7)" ion-button>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <button ion-button full color="cinza" (click)="exit()">{{\'cancelText\' | translate}}</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full class="newReport" (click)="novoLaudo()">{{this.textButton}}</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\classificador\classificador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */]])
    ], ClassificadorPage);
    return ClassificadorPage;
}());

//# sourceMappingURL=classificador.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FotoPage = /** @class */ (function () {
    function FotoPage(navCtrl, camera, navParams, transfer, file, eventos) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.eventos = eventos;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.base64Image = this.navParams.get('base64Image');
    }
    FotoPage.prototype.tirarFoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            _this.base64Image = _this.base64Image;
        });
        this.eventos.publish("foto", this.base64Image);
    };
    FotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-foto',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\foto\foto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'fotos.foto\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <img [src]="base64Image" class="imageBase64"/>\n</ion-content>\n'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\foto\foto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_events__["a" /* Events */]])
    ], FotoPage);
    return FotoPage;
}());

//# sourceMappingURL=foto.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaudoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_print_print__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__printer_list_modal_printer_list_modal__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__principal_principal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_app_app__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LaudoPage = /** @class */ (function () {
    function LaudoPage(navCtrl, modalCtrl, printProvider, alertCtrl, basicFuncProv, app, socialSharing) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.printProvider = printProvider;
        this.alertCtrl = alertCtrl;
        this.basicFuncProv = basicFuncProv;
        this.app = app;
        this.socialSharing = socialSharing;
        this.selectedPrinter = [];
        this.idLaudo = localStorage.getItem('idLaudo');
    }
    LaudoPage.prototype.listBTDevice = function () {
        var _this = this;
        this.printProvider.searchBt().then(function (datalist) {
            //1. Open printer select modal
            var abc = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */], { data: datalist });
            //2. Printer selected, save into this.selectedPrinter
            abc.onDidDismiss(function (data) {
                _this.selectedPrinter = data;
                var xyz = _this.alertCtrl.create({
                    title: data.name + _this.basicFuncProv.buscarTraducao('impressao.selecionada'),
                    buttons: ['OK']
                });
                if (data == null || data == "" || data == undefined) {
                    xyz = _this.alertCtrl.create({
                        title: _this.basicFuncProv.buscarTraducao('impressao.nselecionar') + _this.basicFuncProv.buscarTraducao('impressao.selecionada'),
                        buttons: ['OK']
                    });
                }
                xyz.present();
            });
            //0. Present Modal
            abc.present();
        }, function (err) {
            var mno = _this.alertCtrl.create({
                title: _this.basicFuncProv.buscarTraducao('impressao.conexao'),
                buttons: ['OK']
            });
            mno.present();
        });
    };
    LaudoPage.prototype.testPrinter = function () {
        var id = this.selectedPrinter.id;
        if (id == null || id == "" || id == undefined) {
            var ipm = this.alertCtrl.create({
                title: this.basicFuncProv.buscarTraducao('impressao.selecionar'),
                buttons: ['OK']
            });
            ipm.present();
        }
        else {
            this.printProvider.testPrint(id, this.idLaudo);
        }
    };
    LaudoPage.prototype.voltar = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__principal_principal__["a" /* PrincipalPage */]);
    };
    LaudoPage.prototype.share = function () {
        this.socialSharing.shareViaWhatsApp('http://www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/' + this.idLaudo + "/pdf/" + this.idLaudo + ".pdf");
    };
    LaudoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-laudo',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\laudo\laudo.html"*/'<ion-header color="primary" align="center">\n    <ion-navbar>\n        <ion-title>{{\'impressao.imprimir\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-item>{{selectedPrinter.name}}</ion-item>\n    <button ion-button full (tap)="listBTDevice()">\n        {{\'impressao.selecionar\' | translate}}\n        <!-- Select Printer -->\n    </button>\n    <button ion-button full (click)="share()">Share WhatsApp</button>\n    <button ion-button full (tap)="testPrinter()">\n        {{\'impressao.imprimir\' | translate}}\n        <!-- Test Print -->\n    </button>\n</ion-content>\n<ion-footer>\n    <ion-row>\n        <ion-col>\n            <button ion-button full (click)="voltar()">{{\'impressao.concluir\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\laudo\laudo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_print_print__["a" /* PrintProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], LaudoPage);
    return LaudoPage;
}());

//# sourceMappingURL=laudo.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterListModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterListModalPage = /** @class */ (function () {
    function PrinterListModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.printerList = [];
    }
    PrinterListModalPage.prototype.ionViewDidLoad = function () {
        this.printerList = this.navParams.get('data');
    };
    PrinterListModalPage.prototype.select = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PrinterListModalPage.prototype.voltar = function () {
        this.viewCtrl.dismiss('');
    };
    PrinterListModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-printer-list-modal',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\printer-list-modal\printer-list-modal.html"*/'<ion-header color="primary" align="center">\n    <ion-navbar>\n        <ion-title>{{\'impressao.impressoras\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <br />\n  <ion-list>\n    <button ion-button full large *ngFor="let item of printerList" (tap)="select(item)">\n      {{item.name}} {{item.id}}\n    </button>\n  </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-row>\n        <ion-col>\n            <button ion-button full (click)="voltar()">{{\'impressao.voltar\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\printer-list-modal\printer-list-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], PrinterListModalPage);
    return PrinterListModalPage;
}());

//# sourceMappingURL=printer-list-modal.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContainerPage = /** @class */ (function () {
    function ContainerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContainerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-container',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\container\container.html"*/'<ion-content padding>\n    <div>\n        <ion-grid>\n                <ion-row>\n                        <ion-col>\n                            <ion-item>\n                                <ion-input type="text" [(ngModel)]="notaFiscal" placeholder="Nota Fiscal"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-auto>\n                          <button ion-button color="amspec" (click)="openScanner()"><img class="scanner" src="./assets/imgs/barcode-scanner.png" /></button>\n                        </ion-col>\n                    </ion-row>\n                <ion-row>\n                <ion-col>\n                    <ion-item class="inouts">\n                        <ion-select class="inout" placeholder="Recebimento/Saída" interface="alert" (ionChange)="change()"  cancelText="Cancelar" okText="Selecionar">\n                            <ion-option value="in">Recebimento</ion-option>\n                            <ion-option value="out">Saída</ion-option>\n                        </ion-select>  \n                    </ion-item>\n                </ion-col>  \n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Laudo"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-datetime placeholder="00/00/0000" displayFormat="DD/MM/YYYY" max="{{today}}"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Ord. de Serviço"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Informe o Cliente"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item class="inouts">\n                        <ion-select class="inout" placeholder="Tipo de Produto" interface="alert"  [(ngModel)]="selected" (ionChange)="change($event)" (ionCancel)="cancel()" cancelText="Cancelar" okText="Selecionar">\n                            <ion-option value="soja">Soja</ion-option>\n                            <ion-option value="milho">Milho</ion-option>\n                            <ion-option value="feijaoBolinhaVermelhoInverno">Feijão Bolinha Vermelho - Inverno</ion-option>\n                            <ion-option value="feijaoBolinhaAmareloInverno">Feijão Bolinha Amarelo - Inverno</ion-option>\n                            <ion-option value="feijaoCariocaInverno">Feijão Carioca - Inverno</ion-option>\n                            <ion-option value="feijaoRajadoInverno">Feijão Rajado - Inverno</ion-option>\n                        </ion-select>  \n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Município de Origem"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="AAA - 1010"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Qtde Furos"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-input type="text" placeholder="Lacre ITK"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\transporte\tipo\container\container.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContainerPage);
    return ContainerPage;
}());

//# sourceMappingURL=container.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TremPageModule", function() { return TremPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trem__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TremPageModule = /** @class */ (function () {
    function TremPageModule() {
    }
    TremPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trem__["a" /* TremPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trem__["a" /* TremPage */]),
            ],
        })
    ], TremPageModule);
    return TremPageModule;
}());

//# sourceMappingURL=trem.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_print_print__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_ble__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_bluetooth_serial__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_open_native_settings__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_base64_to_gallery__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_transporte_escolha_escolha__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transporte_tipo_caminhao_caminhao__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_transporte_tipo_container_container__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_transporte_tipo_trem_trem__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_principal_principal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_pesquisa_pesquisa__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_produto_produto__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_classificador_classificador__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_foto_foto__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_laudo_laudo__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_printer_list_modal_printer_list_modal__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_bluetooth_bluetooth__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__directives_directives_module__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_transporte_tipo_trem_trem_module__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { Ionic2MaskDirective } from "ionic2-mask-directive";
// import { UppercaseDirective } from '../directives/uppercase/uppercase';
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                // Ionic2MaskDirective,
                // UppercaseDirective,
                // TabsPage,
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pesquisa_pesquisa__["a" /* PesquisaPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_transporte_escolha_escolha__["a" /* EscolhaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transporte_tipo_caminhao_caminhao__["a" /* CaminhaoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transporte_tipo_container_container__["a" /* ContainerPage */],
                // TremPage,
                __WEBPACK_IMPORTED_MODULE_30__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_classificador_classificador__["a" /* ClassificadorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_foto_foto__["a" /* FotoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_laudo_laudo__["a" /* LaudoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_37__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_transporte_tipo_trem_trem_module__["TremPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (HttpLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_19__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */], {
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transporte/tipo/trem/trem.module#TremPageModule', name: 'TremPage', segment: 'trem', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pesquisa_pesquisa__["a" /* PesquisaPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_transporte_escolha_escolha__["a" /* EscolhaPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transporte_tipo_caminhao_caminhao__["a" /* CaminhaoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_transporte_tipo_container_container__["a" /* ContainerPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_transporte_tipo_trem_trem__["a" /* TremPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_classificador_classificador__["a" /* ClassificadorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_foto_foto__["a" /* FotoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_laudo_laudo__["a" /* LaudoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_printer_list_modal_printer_list_modal__["a" /* PrinterListModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_35__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_8__providers_print_print__["a" /* PrintProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_bluetooth_bluetooth__["a" /* BluetoothProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                // Keyboard,
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, "assets/lang/i18n/", ".json");
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transporte_escolha_escolha__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pesquisa_pesquisa__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, navParams, funcBasicProv, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.funcBasicProv = funcBasicProv;
        this.http = http;
        this.pesquisa = '';
        this.pEntradaSaida = false;
        this.pLaudo = false;
        this.pData = false;
        this.pOs = false;
        this.pProduto = false;
        this.entradaSaida = '';
        this.laudo = '';
        this.data = '';
        this.os = '';
        this.produto = '';
        this.buscarProduto();
        this.buscarLaudos();
        this.today = this.funcBasicProv.getDateToday();
        this.dataHoje = this.funcBasicProv.transformaData();
    }
    PrincipalPage.prototype.novo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transporte_escolha_escolha__["a" /* EscolhaPage */]);
    };
    PrincipalPage.prototype.pesquisar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pesquisa_pesquisa__["a" /* PesquisaPage */]);
    };
    PrincipalPage.prototype.exit = function () {
        localStorage.clear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    PrincipalPage.prototype.buscarLaudos = function () {
        var _this = this;
        try {
            //declarando parametros de conexão
            var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new URLSearchParams() }), url = this.funcBasicProv.DATA_URL + "?acao=buscarLaudo&idUser=" + localStorage.getItem("idUser");
            return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (historico) {
                _this.historicos = historico;
            });
        }
        //se houver falha na conexão avisa
        catch (errorMessage) {
            this.funcBasicProv.mostrarToast('erro');
        }
    };
    PrincipalPage.prototype.buscarProduto = function () {
        var _this = this;
        try {
            //declarando parametros de conexão
            var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new URLSearchParams() }), url = this.funcBasicProv.DATA_URL + "?acao=buscarProdutos";
            return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (produto) {
                _this.produto = produto;
            });
        }
        //se houver falha na conexão avisa
        catch (errorMessage) {
            this.funcBasicProv.mostrarToast('erro');
        }
    };
    PrincipalPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            refresher.complete();
            _this.buscarLaudos();
        }, 500);
    };
    PrincipalPage.prototype.test = function () {
        this.os = "";
        this.laudo = "";
        this.data = "";
        this.entradaSaida = "";
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\principal\principal.html"*/'<ion-header>\n  <div>\n    <ion-grid class="line">\n      \n      <ion-row>\n        <ion-col class="pesquisas">\n          <ion-row class="inouts">\n            <ion-select class="inout" placeholder="&ensp;{{\'pesquisar\' | translate}}" interface="alert" [(ngModel)]="pesquisa" cancelText="{{\'cancelText\' | translate}}"\n              okText="{{\'okText\' | translate}}" [selectOptions]=\'this.funcBasicProv.selectOptions("selectOptions.Pesquisa.subtitulo","ios")\' (ionChange)="test()">\n              <ion-option >&ensp;{{\'principal.todos\' | translate}}</ion-option>\n              <ion-option value="pEntradaSaida">&ensp;{{\'principal.inout\' | translate}}</ion-option>\n              <ion-option value="pLaudo">&ensp;{{\'principal.laudo\' | translate}}</ion-option>\n              <ion-option value="pOs">&ensp;{{\'principal.os\' | translate}}</ion-option>\n              <ion-option value="pData">&ensp;{{\'principal.data\' | translate}}</ion-option>\n              <ion-option value="pProduto">&ensp;{{\'principal.produto\' | translate}}</ion-option>\n            </ion-select>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'\'">\n        <ion-col class="pesquisas">\n          <ion-row>\n            <ion-input placeholder="{{\'pesquisar\' | translate}}" disabled="true" (ionChange)="buscarLaudos()"></ion-input>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'pEntradaSaida\'">\n        <ion-col class="pesquisas">\n            <ion-select class="inout" placeholder="&ensp;{{\'principal.inout\' | translate}}" interface="alert" [(ngModel)]="entradaSaida"\n              cancelText="{{\'cancelText\' | translate}}" okText="{{\'okText\' | translate}}" (ionChange)="buscarLaudos()">\n              <ion-option value="1">&ensp;{{\'principal.in\' | translate}}</ion-option>\n              <ion-option value="0">&ensp;{{\'principal.out\' | translate}}</ion-option>\n            </ion-select>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'pLaudo\'">\n        <ion-col class="pesquisas">\n          <ion-row>\n            <ion-input type="text" placeholder="{{\'principal.laudo\' | translate}}" [(ngModel)]="laudo"></ion-input>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'pOs\'">\n        <ion-col class="pesquisas">\n          <ion-row>\n            <ion-input type="text" placeholder="{{\'principal.os\' | translate}}" [(ngModel)]="os"></ion-input>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'pData\'">\n        <ion-col class="pesquisas">\n          <ion-row>\n            <ion-datetime [(ngModel)]="data" placeholder="--/--/----" displayFormat="DD/MM/YYYY" max="{{today}}" cancelText="{{\'cancelText\' | translate}}"\n              doneText="{{\'doneText\' | translate}}" style="width: 100%; text-align: center"></ion-datetime>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="pesquisa==\'pProduto\'">\n        <ion-col class="pesquisas">\n          <ion-row class="inouts">\n            <ion-select class="inout" placeholder="&ensp;{{\'principal.produto\' | translate}}" interface="alert" [(ngModel)]="produto"\n              cancelText="{{\'cancelText\' | translate}}" okText="{{\'okText\' | translate}}" >\n              <ion-option *ngFor="let produto of produtos" [value]="produto.id">&ensp;{{produto.nome}}</ion-option>\n            </ion-select>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngFor="let historico of historicos">\n    <ion-card *ngIf="historico.os == os || historico.idlaudo == laudo || historico.data == data || historico.tipo_acao == entradaSaida">\n      <ion-card-header>\n        <ion-row>\n          <ion-col col-9>\n            <ion-icon *ngIf="historico.tipo_acao==\'0\'" color="danger" name="ios-undo"></ion-icon>\n            <ion-icon *ngIf="historico.tipo_acao==\'1\'" color="select" name="ios-redo"></ion-icon>\n            {{this.dataHoje}}\n          </ion-col>\n          <ion-col align="right" col-3>\n            <ion-icon *ngIf="historico.idTransporte==1" color="black" name="ai-truck"></ion-icon>\n            <ion-icon *ngIf="historico.idTransporte==2" color="black" name="ai-train"></ion-icon>\n            <ion-icon *ngIf="historico.idTransporte==3" color="black" name="ai-container"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            {{\'principal.laudo\' | translate}}: {{historico.idlaudo}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            {{\'principal.os\' | translate}}: {{historico.os}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            {{\'principal.produto\' | translate}}: {{historico.nome}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            {{\'laudo.cliente\' | translate}}: {{historico.cliente}}\n          </ion-col>\n        </ion-row>\n      </ion-card-header>\n    </ion-card>\n    <ion-card *ngIf="os == \'\' && laudo == \'\' && data == \'\' && entradaSaida == \'\'">\n        <ion-card-header>\n          <ion-row>\n            <ion-col col-9>\n              <ion-icon *ngIf="historico.tipo_acao==\'0\'" color="danger" name="ios-undo"></ion-icon>\n              <ion-icon *ngIf="historico.tipo_acao==\'1\'" color="select" name="ios-redo"></ion-icon>\n              {{this.dataHoje}}\n            </ion-col>\n            <ion-col align="right" col-3>\n              <ion-icon *ngIf="historico.idTransporte==1" color="black" name="ai-truck"></ion-icon>\n              <ion-icon *ngIf="historico.idTransporte==2" color="black" name="ai-train"></ion-icon>\n              <ion-icon *ngIf="historico.idTransporte==3" color="black" name="ai-container"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col >\n              {{\'principal.laudo\' | translate}}: {{historico.idlaudo}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col >\n              {{\'principal.os\' | translate}}: {{historico.os}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col >\n              {{\'principal.produto\' | translate}}: {{historico.nome}}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{\'laudo.cliente\' | translate}}: {{historico.cliente}}\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n      </ion-card>\n  </div>\n</ion-content>\n<ion-footer style="background-color: light;">\n  <ion-row>\n    <ion-col class="colBtn">\n      <button ion-button full class="btnExit" (click)="exit()" color="cinza">{{\'principal.sair\' | translate}}</button>\n    </ion-col>\n    <ion-col class="colBtn">\n      <button ion-button full class="btnNewReport" (click)="novo()">{{\'principal.novolaudo\' | translate}}</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 180,
	"./af.js": 180,
	"./ar": 181,
	"./ar-dz": 182,
	"./ar-dz.js": 182,
	"./ar-kw": 183,
	"./ar-kw.js": 183,
	"./ar-ly": 184,
	"./ar-ly.js": 184,
	"./ar-ma": 185,
	"./ar-ma.js": 185,
	"./ar-sa": 186,
	"./ar-sa.js": 186,
	"./ar-tn": 187,
	"./ar-tn.js": 187,
	"./ar.js": 181,
	"./az": 188,
	"./az.js": 188,
	"./be": 189,
	"./be.js": 189,
	"./bg": 190,
	"./bg.js": 190,
	"./bm": 191,
	"./bm.js": 191,
	"./bn": 192,
	"./bn.js": 192,
	"./bo": 193,
	"./bo.js": 193,
	"./br": 194,
	"./br.js": 194,
	"./bs": 195,
	"./bs.js": 195,
	"./ca": 196,
	"./ca.js": 196,
	"./cs": 197,
	"./cs.js": 197,
	"./cv": 198,
	"./cv.js": 198,
	"./cy": 199,
	"./cy.js": 199,
	"./da": 200,
	"./da.js": 200,
	"./de": 201,
	"./de-at": 202,
	"./de-at.js": 202,
	"./de-ch": 203,
	"./de-ch.js": 203,
	"./de.js": 201,
	"./dv": 204,
	"./dv.js": 204,
	"./el": 205,
	"./el.js": 205,
	"./en-au": 206,
	"./en-au.js": 206,
	"./en-ca": 207,
	"./en-ca.js": 207,
	"./en-gb": 208,
	"./en-gb.js": 208,
	"./en-ie": 209,
	"./en-ie.js": 209,
	"./en-il": 210,
	"./en-il.js": 210,
	"./en-nz": 211,
	"./en-nz.js": 211,
	"./eo": 212,
	"./eo.js": 212,
	"./es": 213,
	"./es-do": 214,
	"./es-do.js": 214,
	"./es-us": 215,
	"./es-us.js": 215,
	"./es.js": 213,
	"./et": 216,
	"./et.js": 216,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 218,
	"./fa.js": 218,
	"./fi": 219,
	"./fi.js": 219,
	"./fo": 220,
	"./fo.js": 220,
	"./fr": 221,
	"./fr-ca": 222,
	"./fr-ca.js": 222,
	"./fr-ch": 223,
	"./fr-ch.js": 223,
	"./fr.js": 221,
	"./fy": 224,
	"./fy.js": 224,
	"./gd": 225,
	"./gd.js": 225,
	"./gl": 226,
	"./gl.js": 226,
	"./gom-latn": 227,
	"./gom-latn.js": 227,
	"./gu": 228,
	"./gu.js": 228,
	"./he": 229,
	"./he.js": 229,
	"./hi": 230,
	"./hi.js": 230,
	"./hr": 231,
	"./hr.js": 231,
	"./hu": 232,
	"./hu.js": 232,
	"./hy-am": 233,
	"./hy-am.js": 233,
	"./id": 234,
	"./id.js": 234,
	"./is": 235,
	"./is.js": 235,
	"./it": 236,
	"./it.js": 236,
	"./ja": 237,
	"./ja.js": 237,
	"./jv": 238,
	"./jv.js": 238,
	"./ka": 239,
	"./ka.js": 239,
	"./kk": 240,
	"./kk.js": 240,
	"./km": 241,
	"./km.js": 241,
	"./kn": 242,
	"./kn.js": 242,
	"./ko": 243,
	"./ko.js": 243,
	"./ky": 244,
	"./ky.js": 244,
	"./lb": 245,
	"./lb.js": 245,
	"./lo": 246,
	"./lo.js": 246,
	"./lt": 247,
	"./lt.js": 247,
	"./lv": 248,
	"./lv.js": 248,
	"./me": 249,
	"./me.js": 249,
	"./mi": 250,
	"./mi.js": 250,
	"./mk": 251,
	"./mk.js": 251,
	"./ml": 252,
	"./ml.js": 252,
	"./mr": 253,
	"./mr.js": 253,
	"./ms": 254,
	"./ms-my": 255,
	"./ms-my.js": 255,
	"./ms.js": 254,
	"./mt": 256,
	"./mt.js": 256,
	"./my": 257,
	"./my.js": 257,
	"./nb": 258,
	"./nb.js": 258,
	"./ne": 259,
	"./ne.js": 259,
	"./nl": 260,
	"./nl-be": 261,
	"./nl-be.js": 261,
	"./nl.js": 260,
	"./nn": 262,
	"./nn.js": 262,
	"./pa-in": 263,
	"./pa-in.js": 263,
	"./pl": 264,
	"./pl.js": 264,
	"./pt": 265,
	"./pt-br": 266,
	"./pt-br.js": 266,
	"./pt.js": 265,
	"./ro": 267,
	"./ro.js": 267,
	"./ru": 268,
	"./ru.js": 268,
	"./sd": 269,
	"./sd.js": 269,
	"./se": 270,
	"./se.js": 270,
	"./si": 271,
	"./si.js": 271,
	"./sk": 272,
	"./sk.js": 272,
	"./sl": 273,
	"./sl.js": 273,
	"./sq": 274,
	"./sq.js": 274,
	"./sr": 275,
	"./sr-cyrl": 276,
	"./sr-cyrl.js": 276,
	"./sr.js": 275,
	"./ss": 277,
	"./ss.js": 277,
	"./sv": 278,
	"./sv.js": 278,
	"./sw": 279,
	"./sw.js": 279,
	"./ta": 280,
	"./ta.js": 280,
	"./te": 281,
	"./te.js": 281,
	"./tet": 282,
	"./tet.js": 282,
	"./tg": 283,
	"./tg.js": 283,
	"./th": 284,
	"./th.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./ug-cn": 291,
	"./ug-cn.js": 291,
	"./uk": 292,
	"./uk.js": 292,
	"./ur": 293,
	"./ur.js": 293,
	"./uz": 294,
	"./uz-latn": 295,
	"./uz-latn.js": 295,
	"./uz.js": 294,
	"./vi": 296,
	"./vi.js": 296,
	"./x-pseudo": 297,
	"./x-pseudo.js": 297,
	"./yo": 298,
	"./yo.js": 298,
	"./zh-cn": 299,
	"./zh-cn.js": 299,
	"./zh-hk": 300,
	"./zh-hk.js": 300,
	"./zh-tw": 301,
	"./zh-tw.js": 301
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 409;

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        var login = localStorage.getItem("login");
        var senha = localStorage.getItem("pass");
        if ((login == "" || login == null) && (senha == "" || senha == null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_principal_principal__["a" /* PrincipalPage */];
        }
        translate.addLangs(["en", "pt-br", "es"]);
        var linguagem = localStorage.getItem("linguagem");
        if (linguagem == null || linguagem == '') {
            translate.setDefaultLang('en');
        }
        translate.setDefaultLang(linguagem);
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kz_mask_kz_mask__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uppercase_uppercase__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__kz_mask_kz_mask__["a" /* KzMaskDirective */],
                __WEBPACK_IMPORTED_MODULE_2__uppercase_uppercase__["a" /* UppercaseDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__kz_mask_kz_mask__["a" /* KzMaskDirective */],
                __WEBPACK_IMPORTED_MODULE_2__uppercase_uppercase__["a" /* UppercaseDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KzMaskDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KzMaskDirective = /** @class */ (function () {
    function KzMaskDirective() {
    }
    KzMaskDirective_1 = KzMaskDirective;
    KzMaskDirective.prototype.writeValue = function (value) {
    };
    KzMaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    KzMaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    KzMaskDirective.prototype.onKeyup = function ($event) {
        var valor = $event.target.value.replace(/\D/g, '');
        var pad = this.kzMask.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);
        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            this.onChange(valor);
            return;
        }
        if (valor.length <= pad.length) {
            this.onChange(valor);
        }
        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.kzMask.length; i++) {
            if (isNaN(parseInt(this.kzMask.charAt(i)))) {
                valor += this.kzMask.charAt(i);
            }
            else {
                valor += valorMask[valorMaskPos++];
            }
        }
        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }
        $event.target.value = valor;
    };
    KzMaskDirective.prototype.onBlur = function ($event) {
        if ($event.target.value.length === this.kzMask.length) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('kzMask'),
        __metadata("design:type", String)
    ], KzMaskDirective.prototype, "kzMask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KzMaskDirective.prototype, "onKeyup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KzMaskDirective.prototype, "onBlur", null);
    KzMaskDirective = KzMaskDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[kzMask]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: KzMaskDirective_1,
                    multi: true
                }]
        })
    ], KzMaskDirective);
    return KzMaskDirective;
    var KzMaskDirective_1;
}());

//# sourceMappingURL=kz-mask.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], UppercaseDirective.prototype, "ngModelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UppercaseDirective.prototype, "onInputChange", null);
    UppercaseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ngModel][uppercase]'
        })
    ], UppercaseDirective);
    return UppercaseDirective;
}());

//# sourceMappingURL=uppercase.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transporte_tipo_caminhao_caminhao__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classificador_classificador__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transporte_tipo_container_container__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transporte_tipo_trem_trem__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TransportePage = this.navParams.get("escolha");
        if (this.TransportePage === "CaminhaoPage")
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__transporte_tipo_caminhao_caminhao__["a" /* CaminhaoPage */];
        if (this.TransportePage === "ContainerPage")
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__transporte_tipo_container_container__["a" /* ContainerPage */];
        if (this.TransportePage === "TremPage")
            this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__transporte_tipo_trem_trem__["a" /* TremPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__produto_produto__["a" /* ProdutoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__classificador_classificador__["a" /* ClassificadorPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\tabs\tabs.html"*/'<ion-tabs id="tabs">\n  <ion-tab [root]="tab1Root" tabIcon="truck" tabTitle="{{\'tabs.transporte\' | translate}}"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="grain" tabTitle="{{\'tabs.classificacao\' | translate}}"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="clipboard" tabTitle="{{\'tabs.observacoes\' | translate}}"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__principal_principal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, funcBasicProv, http, translate) {
        this.navCtrl = navCtrl;
        this.funcBasicProv = funcBasicProv;
        this.http = http;
        this.translate = translate;
    }
    //FUNÇÃO QUE FAZ LOGIN
    LoginPage.prototype.logar = function () {
        var _this = this;
        try {
            var type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new Headers({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers, search: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]() }), url = this.funcBasicProv.DATA_URL + "?acao=login&login=" + this.login + "&senha=" + this.pass;
            return this.http.get(url, options).map(function (res) { return res.json(); }).subscribe(function (id) {
                if (id === 'erro') {
                    _this.funcBasicProv.mostrarToast(_this.funcBasicProv.buscarTraducao("toast.login"));
                }
                else {
                    localStorage.setItem("login", _this.login);
                    localStorage.setItem('pass', _this.pass);
                    localStorage.setItem("idUser", id[0].idUsuario);
                    localStorage.setItem('nome', id[0].nome);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__principal_principal__["a" /* PrincipalPage */]);
                }
            });
        }
        catch (errorMessage) {
            this.funcBasicProv.exitLoad();
            this.funcBasicProv.mostrarToast('erro');
        }
    };
    //SETAR LINGUAGEM
    LoginPage.prototype.select = function (ln) {
        this.translate.setDefaultLang(ln);
        localStorage.setItem("linguagem", ln);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-home',template:/*ion-inline-start:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\login\login.html"*/'<ion-content class="login-content" padding scroll="false">\n\n  <ion-row class="logo-row">\n    <ion-col class="img">\n      <img class="logo" src="./assets/imgs/sbr_logo.png" />\n    </ion-col>\n  </ion-row>\n\n  <div class="login-box">\n    <ion-row>\n      <ion-col class="boxLogin">\n        <ion-row>\n          <ion-input class="transparent login" type="text" [(ngModel)]="login" placeholder="{{\'login.login\' | translate}}"></ion-input>\n        </ion-row>\n        <ion-row>\n          <ion-input class="transparent senha" type="password" [(ngModel)]="pass" placeholder="{{\'login.senha\' | translate}}"></ion-input>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab><ion-icon name="md-options"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="select(\'en\')"><b>EN</b></button>\n      <button ion-fab (click)="select(\'es\')"><b>ES</b></button>\n      <button ion-fab (click)="select(\'pt-br\')"><b>PT</b></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n</ion-content>\n\n<ion-footer>\n  <button (click)="logar()" class="btnLogin" color="dark" ion-button full>{{\'login.entrar\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\augro\Documents\desenvolvimento\trabalho\troca-nota\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__funcoes_basicas_funcoes_basicas__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintProvider = /** @class */ (function () {
    function PrintProvider(btSerial, alertCtrl, basicFuncProv) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
        this.basicFuncProv = basicFuncProv;
        this.contadorPrint = 0;
    }
    PrintProvider.prototype.searchBt = function () {
        return this.btSerial.list();
    };
    PrintProvider.prototype.connectBT = function (address) {
        return this.btSerial.connect(address);
    };
    PrintProvider.prototype.testPrint = function (address, url) {
        var _this = this;
        //padronizando id do laudo. OBS: não mexa!
        url = url.toString();
        while (url.length <= 17) {
            url = "0" + url;
        }
        // pegar o que foi guardado na memória
        this.requestLocalstorage();
        //divisória
        var barra = "!----------------------\n";
        //dados
        var data = "www.sbr-smartfile.com.br/trocaNota/web/TrocaNota/troca-admin/pag/gerando-pdf/pdf/" + url + "/" + url + ".pdf";
        var qr = "(k 1A1 (k 1C	(k 1E0(k} 1P0" + data + "(k 1Q0";
        var cabecalho = this.infoEmpresa + "  ! TICKET LAUDO !\n  " + barra;
        this.texto = cabecalho + this.infoTransportPrint + this.infoClassificacaoPrint + this.infoObsPrint + qr;
        var xyz = this.connectBT(address).subscribe(function (data) {
            _this.btSerial.write(_this.texto).then(function (dataz) {
                var mno = _this.alertCtrl.create({
                    title: _this.basicFuncProv.buscarTraducao('impressao.sucesso'),
                    buttons: ['OK']
                });
                mno.present();
                _this.contadorPrint++;
                xyz.unsubscribe();
            }, function (errx) {
                var mno = _this.alertCtrl.create({
                    title: _this.basicFuncProv.buscarTraducao('impressao.conexao'),
                    buttons: ['OK']
                });
                mno.present();
            });
        }, function (err) {
            var mno = _this.alertCtrl.create({
                title: _this.basicFuncProv.buscarTraducao('impressao.conexao'),
                buttons: ['OK']
            });
            mno.present();
        });
    };
    PrintProvider.prototype.requestLocalstorage = function () {
        this.infoTransportPrint = localStorage.getItem("infoTransportPrint");
        this.idLaudo = localStorage.getItem("idLaudo");
        this.infoClassificacaoPrint = localStorage.getItem("infoClassificacaoPrint");
        this.infoObsPrint = localStorage.getItem("infoObsPrint");
        this.infoEmpresa = localStorage.getItem("infoEmpresa");
    };
    PrintProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__funcoes_basicas_funcoes_basicas__["a" /* FuncoesBasicasProvider */]])
    ], PrintProvider);
    return PrintProvider;
}());

//# sourceMappingURL=print.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map