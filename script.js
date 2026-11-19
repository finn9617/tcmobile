/* ==========================================================================
   TC ELECTRONICS VIETNAM COMPANY LIMITED
   Interactive Behavior & Bilingual (VI / EN) Engine
   ========================================================================== */

(function () {
  'use strict';

  const translations = {
    vi: {
      metaTitle: 'CÔNG TY TNHH TC ELECTRONICS VIỆT NAM | TC ELECTRONICS VIETNAM COMPANY LIMITED',
      skip: 'Chuyển tới nội dung chính',
      'topbar.location': 'Xã Cổ Đô, Thành phố Hà Nội, Việt Nam',
      'nav.about': 'Giới thiệu',
      'nav.solutions': 'Lĩnh vực hoạt động',
      'nav.quality': 'Quy trình & Chất lượng',
      'nav.profile': 'Hồ sơ pháp lý',
      'nav.contact': 'Liên hệ',
      'nav.cta': 'Liên hệ hợp tác',

      'hero.badgeName': 'CÔNG TY TNHH TC ELECTRONICS VIỆT NAM',
      'hero.badgeTax': 'MST: 0111704298',
      'hero.titleMain': 'Giải pháp Thiết bị & Linh kiện Điện tử',
      'hero.titleAccent': 'Chính xác cho Doanh nghiệp',
      'hero.subtitle': 'TC Electronics Vietnam Company Limited cung ứng linh kiện điện tử chính hãng, giải pháp phần cứng PCB/PCBA và thiết bị điện tử công nghiệp – thông minh, cam kết minh bạch nguồn gốc, chuẩn mực kỹ thuật và đồng hành bền vững cùng đối tác B2B trong nước và quốc tế.',
      'hero.ctaPrimary': 'Gửi yêu cầu báo giá & hợp tác',
      'hero.ctaSecondary': 'Hồ sơ pháp lý doanh nghiệp',
      'hero.fact1Label': 'Mã số doanh nghiệp',
      'hero.fact2Label': 'Vốn điều lệ đăng ký',
      'hero.fact2Val': '3.000.000.000 VNĐ',
      'hero.fact3Label': 'Trụ sở chính',
      'hero.fact3Val': 'Hà Nội, Việt Nam',
      'hero.cardStatus': 'Đang hoạt động',
      'hero.entityLabel': 'Pháp nhân đăng ký chính thức / Registered Entity',
      'hero.metaTax': 'Mã số doanh nghiệp / Tax ID',
      'hero.metaDate': 'Ngày đăng ký / Inc. Date',

      'about.diagramTitle': 'Chuỗi Giá trị Cung ứng & Kỹ thuật',
      'about.chip1': 'Hồ sơ đối soát',
      'about.chip2': 'Bảo quản chuẩn',
      'about.chip3': 'Chứng từ đầy đủ',
      'about.eyebrow': 'Về doanh nghiệp',
      'about.title': 'Đối tác cung ứng thiết bị & giải pháp điện tử minh bạch tại Việt Nam',
      'about.p1': '<strong>CÔNG TY TNHH TC ELECTRONICS VIỆT NAM</strong> (tên quốc tế: <strong>TC ELECTRONICS VIETNAM COMPANY LIMITED</strong>) là doanh nghiệp hoạt động trong lĩnh vực điện tử, cung ứng linh kiện bán dẫn, vật tư lắp ráp bo mạch và thiết bị điện tử công nghiệp – thương mại có trụ sở chính tại Thành phố Hà Nội, Việt Nam.',
      'about.p2': 'Được thành lập hợp pháp theo Giấy chứng nhận đăng ký doanh nghiệp số <span class="mono">0111704298</span> với vốn điều lệ đăng ký 3.000.000.000 đồng, chúng tôi định hướng xây dựng mô hình vận hành chuẩn mực, minh bạch pháp lý và đáp ứng đầy đủ yêu cầu kỹ thuật của khách hàng doanh nghiệp, nhà xưởng sản xuất cũng như đối tác quốc tế.',
      'about.check1': 'Quản trị minh bạch, đầy đủ pháp nhân, mã số thuế và chứng từ giao dịch B2B.',
      'about.check2': 'Đối chiếu tài liệu kỹ thuật (Datasheet) và kiểm tra ngoại quan trước khi xuất kho.',
      'about.check3': 'Sẵn sàng kết nối chuỗi cung ứng, thương mại điện tử toàn cầu và chuẩn xác minh D-U-N-S.',
      'about.pillar1Title': 'Nguồn gốc minh bạch',
      'about.pillar1Desc': 'Linh kiện và thiết bị điện tử được tuyển chọn từ nhà cung cấp uy tín, cung cấp tài liệu kỹ thuật và hồ sơ truy xuất rõ ràng theo từng đơn hàng.',
      'about.pillar2Title': 'Kỷ luật kỹ thuật',
      'about.pillar2Desc': 'Tuân thủ quy trình bảo quản chống tĩnh điện (ESD), kiểm tra mã linh kiện (Part Number) và tư vấn giải pháp tương thích cho dự án phần cứng.',
      'about.pillar3Title': 'Chuẩn mực hợp tác B2B',
      'about.pillar3Desc': 'Hợp đồng thương mại rõ ràng, xuất hóa đơn GTGT đầy đủ và hỗ trợ giao tiếp song ngữ Việt – Anh với khách hàng, đối tác quốc tế.',

      'solutions.eyebrow': 'Lĩnh vực hoạt động cốt lõi',
      'solutions.title': 'Danh mục sản phẩm & dịch vụ ngành điện tử',
      'solutions.lead': 'Chúng tôi tập trung vào 4 nhóm giải pháp cốt lõi phục vụ hoạt động sản xuất, nghiên cứu phát triển (R&D), bảo trì công nghiệp và phân phối thiết bị điện tử.',
      'solutions.s1Title': 'Linh kiện Điện tử & Bán dẫn',
      'solutions.s1Desc': 'Cung ứng đa dạng linh kiện chủ động và thụ động phục vụ sản xuất điện tử: vi điều khiển (MCU), IC quản lý nguồn, cảm biến, linh kiện dán SMD/cắm THT và đầu nối công nghiệp.',
      'solutions.s2Title': 'Giải pháp Bo mạch PCB / PCBA & Phần cứng',
      'solutions.s2Desc': 'Hỗ trợ tổng hợp danh mục vật tư (BOM Kitting), cung ứng bo mạch PCB/PCBA mẫu thử và tích hợp module điều khiển điện tử theo yêu cầu kỹ thuật của doanh nghiệp.',
      'solutions.s3Title': 'Thiết bị Điện tử Công nghiệp & Thông minh',
      'solutions.s3Desc': 'Phân phối bộ nguồn công nghiệp, module điều khiển – giám sát IoT, thiết bị đo kiểm cơ bản và các dòng sản phẩm, phụ kiện điện tử thương mại – dân dụng chất lượng cao.',
      'solutions.s4Title': 'Tư vấn Kỹ thuật & Kiểm định Chất lượng',
      'solutions.s4Desc': 'Tư vấn tối ưu phương án linh kiện thay thế tương đương, đối chiếu thông số kỹ thuật, kiểm tra chất lượng đầu vào và chính sách bảo hành – hỗ trợ kỹ thuật sau bán hàng.',

      'scope.tab1': 'Linh kiện & Bán dẫn',
      'scope.tab2': 'PCB / PCBA & BOM',
      'scope.tab3': 'Thiết bị Công nghiệp & IoT',
      'scope.tab4': 'Hỗ trợ Kỹ thuật & QA',
      'scope.specHeading': 'Thông số & Phạm vi cung ứng',
      'scope.cta': 'Gửi danh sách BOM để nhận báo giá',
      'scope.cta2': 'Trao đổi nhu cầu thiết bị',
      'scope.cta3': 'Kết nối bộ phận kỹ thuật',
      'scope.p1Title': 'Cung ứng Linh kiện Điện tử Chính xác cho Sản xuất & R&D',
      'scope.p1Desc': 'Hỗ trợ tìm nguồn và cung ứng nhanh các dòng linh kiện từ giai đoạn phát triển mẫu thử (R&D) đến đơn hàng sản xuất định kỳ, đảm bảo đúng mã linh kiện (MPN), đúng thông số điện áp – nhiệt độ và đóng gói chống tĩnh điện.',
      'scope.p1k1': 'Phân loại linh kiện',
      'scope.p1v1': 'IC, MCU, MOSFET, R/C/L, Connectors',
      'scope.p1k2': 'Chuẩn đóng gói',
      'scope.p1v2': 'Tape & Reel, Tray, Tube, ESD Bag',
      'scope.p1k3': 'Hồ sơ đi kèm',
      'scope.p1v3': 'Datasheet, Packing List, Hóa đơn GTGT',
      'scope.p2Title': 'Tổng hợp Vật tư (BOM Kitting) & Tích hợp Module Phần cứng',
      'scope.p2Desc': 'Đồng bộ hóa quy trình đặt hàng cho các đội ngũ kỹ sư và doanh nghiệp phần cứng: rà soát danh sách BOM, đề xuất linh kiện thay thế tối ưu chi phí – thời gian giao hàng và hỗ trợ cung ứng bo mạch mẫu thử.',
      'scope.p2k1': 'Tài liệu tiếp nhận',
      'scope.p2k2': 'Quy mô đơn hàng',
      'scope.p2v2': 'Mẫu thử (Prototype) & B2B định kỳ',
      'scope.p2k3': 'Kiểm tra đầu ra',
      'scope.p2v3': 'Đối chiếu Part Number & Ngoại quan',
      'scope.p3Title': 'Thiết bị Điện tử Công nghiệp, Nguồn & Ứng dụng IoT',
      'scope.p3Desc': 'Cung cấp các bộ nguồn ổn áp công nghiệp, thiết bị chuyển đổi tín hiệu, cảm biến giám sát môi trường – năng lượng và thiết bị điện tử thông minh phục vụ vận hành nhà xưởng, văn phòng và dự án thương mại.',
      'scope.p3k1': 'Nhóm thiết bị',
      'scope.p3v1': 'Power Supply, IoT Nodes, Smart Hardware',
      'scope.p3k2': 'Khách hàng mục tiêu',
      'scope.p3v2': 'Doanh nghiệp, Nhà tích hợp hệ thống',
      'scope.p3k3': 'Chính sách hậu mãi',
      'scope.p3v3': 'Bảo hành theo tiêu chuẩn hãng & hợp đồng',
      'scope.p4Title': 'Tư vấn Kỹ thuật Chuyên sâu & Kiểm soát Chất lượng',
      'scope.p4Desc': 'Đảm bảo tính ổn định cho dây chuyền và dự án của khách hàng thông qua quy trình xác minh thông số kỹ thuật, kiểm soát điều kiện lưu kho chống ẩm – chống tĩnh điện và hỗ trợ xử lý kỹ thuật kịp thời.',
      'scope.p4k1': 'Tiêu chuẩn lưu kho',
      'scope.p4v1': 'Chống tĩnh điện ESD & Kiểm soát ẩm',
      'scope.p4k2': 'Tư vấn thay thế',
      'scope.p4v2': 'Cross-reference MPN tương đương',
      'scope.p4k3': 'Kênh phản hồi',
      'scope.p4v3': 'Email & Hotline trực tiếp giờ hành chính',

      'quality.eyebrow': 'Quy trình vận hành chuẩn hóa',
      'quality.title': 'Kiểm soát chất lượng xuyên suốt từ tiếp nhận đến bàn giao',
      'quality.lead': 'Mỗi đơn hàng tại TC Electronics Vietnam đều tuân thủ quy trình 4 bước rõ ràng nhằm đảm bảo độ chính xác kỹ thuật, tiến độ giao nhận và tính minh bạch chứng từ.',
      'quality.step1Title': 'Tiếp nhận Yêu cầu & BOM',
      'quality.step1Desc': 'Tiếp nhận danh sách linh kiện, thông số kỹ thuật hoặc yêu cầu thiết bị từ khách hàng doanh nghiệp qua email hoặc biểu mẫu chính thức.',
      'quality.step2Title': 'Tư vấn & Báo giá Minh bạch',
      'quality.step2Desc': 'Xác nhận tình trạng nguồn cung, đối chiếu tài liệu kỹ thuật, gửi báo giá chi tiết kèm thời gian giao hàng và điều khoản hợp đồng rõ ràng.',
      'quality.step3Title': 'Kiểm tra & Đóng gói ESD',
      'quality.step3Desc': 'Kiểm tra ngoại quan, mã linh kiện (Part Number), số lượng và thực hiện đóng gói an toàn chống tĩnh điện, chống sốc trước khi vận chuyển.',
      'quality.step4Title': 'Bàn giao & Chứng từ GTGT',
      'quality.step4Desc': 'Bàn giao hàng hóa đúng hẹn kèm đầy đủ biên bản giao nhận, hóa đơn GTGT hợp lệ và kích hoạt chính sách bảo hành – hỗ trợ kỹ thuật.',
      'quality.bannerTitle': 'Cam kết Tuân thủ Pháp lý & Giao dịch Thương mại Minh bạch',
      'quality.bannerDesc': 'TC Electronics Vietnam duy trì đầy đủ hồ sơ pháp nhân, thông tin liên hệ xác thực và chính sách bảo mật dữ liệu theo quy định pháp luật Việt Nam nhằm đáp ứng tiêu chuẩn hợp tác của đối tác trong nước và quốc tế.',
      'quality.bannerCta': 'Xem hồ sơ pháp lý',

      'profile.eyebrow': 'Hồ sơ Pháp lý Doanh nghiệp / Corporate Legal Profile',
      'profile.title': 'Thông tin Đăng ký Doanh nghiệp Chính thức',
      'profile.lead': 'Thông tin pháp nhân được công bố chính xác theo Giấy chứng nhận đăng ký doanh nghiệp do Phòng Đăng ký kinh doanh và Tài chính doanh nghiệp – Sở Tài chính Thành phố Hà Nội cấp, phục vụ tra cứu đối tác và xác minh doanh nghiệp (bao gồm hồ sơ D-U-N-S).',
      'profile.statusBadge': 'Pháp nhân hợp lệ · Active Entity',
      'profile.footnote': 'Dữ liệu khớp 100% với Giấy chứng nhận đăng ký doanh nghiệp số 0111704298 (cấp ngày 17/11/2026).',
      'profile.policyBtn': 'Chính sách Bảo mật & Pháp lý',

      'contact.eyebrow': 'Liên hệ doanh nghiệp',
      'contact.title': 'Kết nối với TC Electronics Vietnam',
      'contact.lead': 'Liên hệ trực tiếp trụ sở chính của chúng tôi để yêu cầu báo giá linh kiện điện tử, hợp tác cung ứng B2B hoặc xác minh thông tin doanh nghiệp.',
      'contact.infoTitle': 'Thông tin Liên hệ Chính thức',
      'contact.companyLbl': 'Tên doanh nghiệp',
      'contact.addressLbl': 'Địa chỉ trụ sở chính',
      'contact.phoneLbl': 'Điện thoại',
      'contact.emailLbl': 'Thư điện tử',
      'contact.hoursLbl': 'Giờ làm việc',
      'contact.hoursVal1': 'Thứ 2 – Thứ 6: 08:00 – 17:30 (GMT+7)',
      'contact.hoursVal2': 'Thứ 7: 08:00 – 12:00 (GMT+7)',
      'contact.mapLink': 'Xem vị trí trụ sở chính trên Google Maps',

      'form.title': 'Gửi Yêu cầu Báo giá / Xác minh Đối tác',
      'form.subtitle': 'Vui lòng để lại thông tin, bộ phận phụ trách của TC Electronics Vietnam sẽ phản hồi trong vòng 01 ngày làm việc.',
      'form.nameLbl': 'Họ và tên',
      'form.namePh': 'Nguyễn Văn A',
      'form.companyLbl': 'Tên doanh nghiệp / Tổ chức',
      'form.companyPh': 'Công ty TNHH...',
      'form.emailLbl': 'Email liên hệ',
      'form.phoneLbl': 'Số điện thoại',
      'form.topicLbl': 'Chủ đề yêu cầu',
      'form.opt1': 'Yêu cầu báo giá linh kiện điện tử / BOM',
      'form.opt2': 'Đề xuất hợp tác thương mại B2B / OEM',
      'form.opt3': 'Xác minh thông tin doanh nghiệp / Đối tác',
      'form.opt4': 'Tư vấn kỹ thuật & bảo hành sản phẩm',
      'form.msgLbl': 'Nội dung chi tiết',
      'form.msgPh': 'Mô tả danh mục linh kiện, số lượng dự kiến hoặc thông tin cần trao đổi...',
      'form.privacyNote': 'Thông tin của quý khách được bảo mật theo Chính sách Bảo mật của công ty.',
      'form.submit': 'Gửi yêu cầu liên hệ',

      'footer.desc': 'CÔNG TY TNHH TC ELECTRONICS VIỆT NAM — Đơn vị cung ứng linh kiện điện tử, giải pháp phần cứng PCB/PCBA và thiết bị điện tử công nghiệp tại Hà Nội, Việt Nam.',
      'footer.colNav': 'Điều hướng',
      'footer.colLegal': 'Pháp lý & Chính sách',
      'footer.linkProfile': 'Thông tin đăng ký doanh nghiệp',
      'footer.linkPrivacy': 'Chính sách Bảo mật (Privacy Policy)',
      'footer.linkTerms': 'Điều khoản Sử dụng (Terms of Service)',
      'footer.colContact': 'Trụ sở chính & Liên hệ',
      'footer.rights': 'Bảo lưu mọi quyền.',

      toastCopied: 'Đã sao chép vào khay nhớ tạm',
      formError: 'Vui lòng điền đầy đủ Họ tên, Email hợp lệ và Nội dung yêu cầu.',
      formSuccessPrefix: 'Đã chuẩn bị nội dung yêu cầu thành công. Bạn có thể gửi trực tiếp tới bộ phận phụ trách qua email: '
    },
    en: {
      metaTitle: 'TC ELECTRONICS VIETNAM COMPANY LIMITED | Precision Electronic Solutions',
      skip: 'Skip to main content',
      'topbar.location': 'Co Do Commune, Hanoi City, Vietnam',
      'nav.about': 'About Us',
      'nav.solutions': 'Solutions',
      'nav.quality': 'Quality Process',
      'nav.profile': 'Legal Profile',
      'nav.contact': 'Contact',
      'nav.cta': 'Contact Us',

      'hero.badgeName': 'TC ELECTRONICS VIETNAM COMPANY LIMITED',
      'hero.badgeTax': 'TAX ID: 0111704298',
      'hero.titleMain': 'Precision Electronic Components &',
      'hero.titleAccent': 'Hardware Solutions for Enterprise',
      'hero.subtitle': 'TC Electronics Vietnam Company Limited supplies traceable electronic components, PCB/PCBA hardware sourcing, and industrial & smart electronic equipment from Hanoi, Vietnam — built on technical rigor, legal transparency, and reliable B2B fulfillment.',
      'hero.ctaPrimary': 'Request Business Inquiry',
      'hero.ctaSecondary': 'Corporate Legal Profile',
      'hero.fact1Label': 'Enterprise Registration No.',
      'hero.fact2Label': 'Registered Charter Capital',
      'hero.fact2Val': '3,000,000,000 VND',
      'hero.fact3Label': 'Headquarters',
      'hero.fact3Val': 'Hanoi, Vietnam',
      'hero.cardStatus': 'Active Entity',
      'hero.entityLabel': 'Official Registered Corporate Entity',
      'hero.metaTax': 'Enterprise Code / Tax ID',
      'hero.metaDate': 'Incorporation Date',

      'about.diagramTitle': 'Supply Chain & Engineering Architecture',
      'about.chip1': 'Full Traceability',
      'about.chip2': 'ESD-Safe Handling',
      'about.chip3': 'VAT & Compliance',
      'about.eyebrow': 'About Our Company',
      'about.title': 'A Transparent Electronics & Hardware Supply Partner in Vietnam',
      'about.p1': '<strong>TC ELECTRONICS VIETNAM COMPANY LIMITED</strong> (Vietnamese legal name: <strong>CÔNG TY TNHH TC ELECTRONICS VIỆT NAM</strong>) is a Hanoi-based electronics enterprise dedicated to semiconductor and electronic component supply, circuit assembly sourcing, and industrial & commercial electronic equipment.',
      'about.p2': 'Legally incorporated under Enterprise Registration Certificate No. <span class="mono">0111704298</span> with registered charter capital of 3,000,000,000 VND, we operate with strict corporate governance, verified documentation, and engineering accountability for domestic manufacturers and global B2B partners.',
      'about.check1': 'Transparent corporate governance, verified tax identity, and compliant B2B invoicing.',
      'about.check2': 'Datasheet verification and incoming visual inspection prior to every shipment.',
      'about.check3': 'Ready for global supply chains, digital commerce platforms, and D-U-N-S verification.',
      'about.pillar1Title': 'Verified Traceability',
      'about.pillar1Desc': 'Electronic components and hardware sourced from vetted channels with clear technical datasheets and order-level traceability documentation.',
      'about.pillar2Title': 'Engineering Discipline',
      'about.pillar2Desc': 'Adherence to ESD-safe storage standards, manufacturer part number (MPN) cross-checking, and practical hardware compatibility guidance.',
      'about.pillar3Title': 'B2B Compliance Standards',
      'about.pillar3Desc': 'Clear commercial terms, statutory VAT invoicing, and responsive Vietnamese–English communication for international procurement teams.',

      'solutions.eyebrow': 'Core Business Scope',
      'solutions.title': 'Electronics Products & Engineering Services',
      'solutions.lead': 'We focus on four core electronics divisions supporting manufacturing lines, hardware R&D teams, industrial maintenance, and commercial distribution.',
      'solutions.s1Title': 'Electronic Components & Semiconductors',
      'solutions.s1Desc': 'Supply of active and passive components for electronics production: microcontrollers (MCUs), power management ICs, industrial sensors, SMD/THT passives, and industrial connectors.',
      'solutions.s2Title': 'PCB / PCBA Sourcing & Hardware Integration',
      'solutions.s2Desc': 'Comprehensive Bill of Materials (BOM) kitting, prototype PCB/PCBA sourcing, and custom electronic control module integration aligned to enterprise technical specifications.',
      'solutions.s3Title': 'Industrial & Smart Electronic Equipment',
      'solutions.s3Desc': 'Distribution of industrial power supplies, IoT telemetry and control modules, instrumentation, and reliable commercial & consumer electronic equipment and accessories.',
      'solutions.s4Title': 'Technical Consulting & Quality Inspection',
      'solutions.s4Desc': 'BOM optimization and equivalent component cross-referencing, technical datasheet validation, incoming quality inspection, and responsive after-sales warranty support.',

      'scope.tab1': 'Components & ICs',
      'scope.tab2': 'PCB / PCBA & BOM',
      'scope.tab3': 'Industrial & IoT',
      'scope.tab4': 'Technical QA Support',
      'scope.specHeading': 'Supply Specifications & Deliverables',
      'scope.cta': 'Submit BOM for Quotation',
      'scope.cta2': 'Discuss Equipment Requirements',
      'scope.cta3': 'Connect with Technical Team',
      'scope.p1Title': 'Precision Electronic Component Supply for Production & R&D',
      'scope.p1Desc': 'Reliable sourcing from early R&D prototyping through scheduled production orders — ensuring exact manufacturer part numbers (MPN), electrical/thermal ratings, and ESD-protected packaging.',
      'scope.p1k1': 'Component Categories',
      'scope.p1v1': 'IC, MCU, MOSFET, R/C/L, Connectors',
      'scope.p1k2': 'Packaging Standards',
      'scope.p1v2': 'Tape & Reel, Tray, Tube, ESD Bag',
      'scope.p1k3': 'Documentation',
      'scope.p1v3': 'Datasheet, Packing List, VAT Invoice',
      'scope.p2Title': 'Consolidated BOM Kitting & Hardware Module Integration',
      'scope.p2Desc': 'Streamlined procurement for engineering teams and OEMs: BOM review, lead-time and cost-optimized cross-reference recommendations, and turnkey prototype board sourcing.',
      'scope.p2k1': 'Accepted Formats',
      'scope.p2k2': 'Order Flexibility',
      'scope.p2v2': 'Prototypes & Recurring B2B Batches',
      'scope.p2k3': 'Pre-Shipment Check',
      'scope.p2v3': 'MPN Verification & Visual Inspection',
      'scope.p3Title': 'Industrial Electronics, Power Systems & Smart IoT Devices',
      'scope.p3Desc': 'Regulated industrial power supplies, signal converters, environmental and power monitoring sensors, and commercial smart electronics engineered for continuous operation.',
      'scope.p3k1': 'Equipment Lines',
      'scope.p3v1': 'Power Supply, IoT Nodes, Smart Hardware',
      'scope.p3k2': 'Target Partners',
      'scope.p3v2': 'Enterprises & System Integrators',
      'scope.p3k3': 'Warranty Policy',
      'scope.p3v3': 'Manufacturer & Contractual Coverage',
      'scope.p4Title': 'Technical Advisory & Incoming Quality Control',
      'scope.p4Desc': 'Safeguarding project continuity through datasheet verification, moisture and ESD-controlled handling procedures, and dedicated technical communication during office hours.',
      'scope.p4k1': 'Storage Controls',
      'scope.p4v1': 'ESD Protection & Moisture Control',
      'scope.p4k2': 'Alternative Sourcing',
      'scope.p4v2': 'Verified MPN Cross-Referencing',
      'scope.p4k3': 'Support Channels',
      'scope.p4v3': 'Direct Corporate Email & Hotline',

      'quality.eyebrow': 'Standardized Operations',
      'quality.title': 'End-to-End Quality Control from Inquiry to Delivery',
      'quality.lead': 'Every order at TC Electronics Vietnam follows a structured four-stage workflow designed for technical accuracy, predictable delivery schedules, and audit-ready documentation.',
      'quality.step1Title': 'BOM & Requirement Intake',
      'quality.step1Desc': 'Receive part lists, datasheets, or equipment specifications from enterprise buyers via official corporate email or inquiry form.',
      'quality.step2Title': 'Technical Review & Formal Quote',
      'quality.step2Desc': 'Verify supply availability, validate specifications, and issue a transparent quotation detailing pricing, lead times, and commercial terms.',
      'quality.step3Title': 'Verification & ESD Packaging',
      'quality.step3Desc': 'Conduct visual inspection, part number and quantity confirmation, and secure anti-static shockproof packaging prior to dispatch.',
      'quality.step4Title': 'Delivery & Statutory Invoicing',
      'quality.step4Desc': 'Deliver on schedule with packing lists, statutory Vietnamese VAT invoices, and formal warranty & technical support coverage.',
      'quality.bannerTitle': 'Commitment to Legal Compliance & Commercial Transparency',
      'quality.bannerDesc': 'TC Electronics Vietnam maintains verifiable legal registration records, active official contact channels, and clear privacy policies compliant with Vietnamese law for domestic and international partner due diligence.',
      'quality.bannerCta': 'View Legal Profile',

      'profile.eyebrow': 'Corporate Legal Profile / Verification Registry',
      'profile.title': 'Official Business Registration Information',
      'profile.lead': 'Published directly from our Enterprise Registration Certificate issued by the Business Registration and Corporate Finance Office – Hanoi Department of Finance, supporting B2B due diligence, banking, and D-U-N-S verification.',
      'profile.statusBadge': 'Active Registered Entity',
      'profile.footnote': '100% consistent with Enterprise Registration Certificate No. 0111704298 (issued November 17, 2026).',
      'profile.policyBtn': 'Privacy & Legal Policies',

      'contact.eyebrow': 'Corporate Contact',
      'contact.title': 'Connect with TC Electronics Vietnam',
      'contact.lead': 'Contact our Hanoi headquarters directly for electronic component quotations, B2B supply partnerships, or official corporate verification inquiries.',
      'contact.infoTitle': 'Official Contact Details',
      'contact.companyLbl': 'Registered Company Name',
      'contact.addressLbl': 'Registered Head Office',
      'contact.phoneLbl': 'Official Telephone',
      'contact.emailLbl': 'Official Email',
      'contact.hoursLbl': 'Business Hours',
      'contact.hoursVal1': 'Monday – Friday: 08:00 – 17:30 (GMT+7)',
      'contact.hoursVal2': 'Saturday: 08:00 – 12:00 (GMT+7)',
      'contact.mapLink': 'View Registered Head Office on Google Maps',

      'form.title': 'Send a Business / Verification Inquiry',
      'form.subtitle': 'Submit your inquiry below and our team at TC Electronics Vietnam will respond within 1 business day.',
      'form.nameLbl': 'Full Name',
      'form.namePh': 'John Doe',
      'form.companyLbl': 'Company / Organization',
      'form.companyPh': 'Your company name',
      'form.emailLbl': 'Business Email',
      'form.phoneLbl': 'Telephone Number',
      'form.topicLbl': 'Inquiry Subject',
      'form.opt1': 'Electronic Components / BOM Quotation',
      'form.opt2': 'B2B / OEM Supply Partnership',
      'form.opt3': 'Corporate / D-U-N-S Verification Inquiry',
      'form.opt4': 'Technical & Warranty Support',
      'form.msgLbl': 'Message Details',
      'form.msgPh': 'Describe component part numbers, quantities, or verification details...',
      'form.privacyNote': 'Your inquiry is handled strictly in accordance with our Corporate Privacy Policy.',
      'form.submit': 'Submit Inquiry',

      'footer.desc': 'TC ELECTRONICS VIETNAM COMPANY LIMITED — Electronic components, PCB/PCBA hardware sourcing, and industrial electronics solutions headquartered in Hanoi, Vietnam.',
      'footer.colNav': 'Navigation',
      'footer.colLegal': 'Legal & Compliance',
      'footer.linkProfile': 'Corporate Registration Profile',
      'footer.linkPrivacy': 'Privacy Policy',
      'footer.linkTerms': 'Terms of Service',
      'footer.colContact': 'Headquarters & Contact',
      'footer.rights': 'All rights reserved.',

      toastCopied: 'Copied to clipboard',
      formError: 'Please provide your full name, a valid email address, and inquiry details.',
      formSuccessPrefix: 'Your inquiry is ready. Click below to send directly via your email client to: '
    }
  };

  const richKeys = new Set(['about.p1', 'about.p2']);
  let currentLang = 'vi';

  function getInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = (params.get('lang') || '').toLowerCase();
      if (q === 'en' || q === 'vi') return q;
      const saved = window.localStorage.getItem('tc_lang');
      if (saved === 'en' || saved === 'vi') return saved;
    } catch (_) {
      // Ignore storage restrictions
    }
    return 'vi';
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang;
    if (dict.metaTitle) {
      document.title = dict.metaTitle;
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (richKeys.has(key)) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      const isMatch = btn.getAttribute('data-lang-btn') === lang;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    try {
      window.localStorage.setItem('tc_lang', lang);
    } catch (_) {
      // Ignore storage restrictions
    }
  }

  // Language switcher bindings
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-lang-btn');
      applyLanguage(target);
    });
  });

  // Sticky Header Scroll Elevation
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const onScroll = function () {
      if (window.scrollY > 18) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile Menu Drawer
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuToggle && mobileNav) {
    const closeMobileMenu = function () {
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileMenu();
        menuToggle.focus();
      }
    });
  }

  // Interactive Scope Explorer Tabs
  const tabButtons = Array.from(document.querySelectorAll('.scope-tab'));
  const tabPanels = Array.from(document.querySelectorAll('.scope-panel'));

  function activateTab(tab) {
    const targetId = tab.getAttribute('aria-controls');
    tabButtons.forEach(function (btn) {
      const selected = btn === tab;
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    tabPanels.forEach(function (panel) {
      panel.classList.toggle('is-active', panel.id === targetId);
    });
  }

  tabButtons.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      activateTab(tab);
    });

    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = tabButtons[(index + 1) % tabButtons.length];
        next.focus();
        activateTab(next);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
        prev.focus();
        activateTab(prev);
      }
    });
  });

  // Toast helper
  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 2200);
  }

  // Copy-to-Clipboard buttons in Corporate Legal Profile
  const checkSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  const copySvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const value = btn.getAttribute('data-copy') || '';
      if (!value) return;

      const onCopied = function () {
        btn.classList.add('is-copied');
        btn.innerHTML = checkSvg;
        showToast(translations[currentLang].toastCopied + ': ' + value);
        setTimeout(function () {
          btn.classList.remove('is-copied');
          btn.innerHTML = copySvg;
        }, 1800);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(onCopied).catch(function () {
          fallbackCopy(value, onCopied);
        });
      } else {
        fallbackCopy(value, onCopied);
      }
    });
  });

  function fallbackCopy(text, callback) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (_) {
      // No-op
    }
    document.body.removeChild(textarea);
  }

  // Active Navigation Highlight on Scroll
  const navLinks = Array.from(document.querySelectorAll('.nav-desktop .nav-link'));
  const observedSections = navLinks
    .map(function (link) {
      const id = link.getAttribute('href');
      return id && id.startsWith('#') ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const activeId = '#' + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === activeId);
          });
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    observedSections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Contact Inquiry Form (Static-host safe with mailto compose fallback)
  const inquiryForm = document.getElementById('inquiry-form');
  const formStatus = document.getElementById('form-status');

  if (inquiryForm && formStatus) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = (inquiryForm.fullName.value || '').trim();
      const companyName = (inquiryForm.companyName.value || '').trim();
      const email = (inquiryForm.email.value || '').trim();
      const phone = (inquiryForm.phone.value || '').trim();
      const topic = (inquiryForm.topic.value || '').trim();
      const message = (inquiryForm.message.value || '').trim();

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!fullName || !emailValid || !message) {
        formStatus.className = 'form-status is-error';
        formStatus.textContent = translations[currentLang].formError;
        return;
      }

      const subject = '[TC Electronics Vietnam] ' + topic + (companyName ? ' - ' + companyName : '');
      const bodyLines = [
        'Họ tên / Full Name: ' + fullName,
        'Doanh nghiệp / Company: ' + (companyName || 'N/A'),
        'Email: ' + email,
        'Điện thoại / Phone: ' + (phone || 'N/A'),
        'Chủ đề / Topic: ' + topic,
        '',
        'Nội dung / Message:',
        message
      ];

      const mailtoHref =
        'mailto:tcelectronicsvietnam@gmail.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(bodyLines.join('\n'));

      formStatus.className = 'form-status is-success';
      formStatus.textContent = translations[currentLang].formSuccessPrefix;

      const link = document.createElement('a');
      link.href = mailtoHref;
      link.textContent = 'tcelectronicsvietnam@gmail.com';
      formStatus.appendChild(link);

      // Open default mail client for static deployments
      window.location.href = mailtoHref;
    });
  }

  // Initialize language
  applyLanguage(getInitialLang());
})();
