$(document).ready(function () {
  // MODAL
  var modalText = {
    discover: {
      title: 'Angrybunnies NFT',
      tag: 'NFT MINTING DAPP',
      detail:
        'COLLECTION OF 7,777 UNIQUE RARITY NFTS PRICED AT 0.06ETH RANDOMLY GENERATED DIGITAL COLLECTABLES FROM HAND DRAWINGS LIVING ON THE ETHEREUM BLOCKCHAIN AS ERC- 721 TOKENS',
      link: 'https://angrybunniesnft.com/'
    },
    ordering: {
      title: 'Paladinpandas NFT',
      tag: 'NFT MINTING DAPP',
      detail:
        'Paladin Pandas, 10,000 hand-drawn unique NFT digital identities. All Paladin Pandas can be used as your digital characters in Space Expedition, our on-chain game, in order to earn $BAMB. Space Expedition PvE will be launched in January 2022.',
      link: 'https://www.paladinpandas.com/'
    },
    newrelic: {
      title: 'NILCoin',
      tag: 'ERC20 Token (rebase + deflationary)',
      detail:
        'NIL is the Official Crypto that rewards College Athletes for their name, image & likeness when promoting products and services on social media.',
      link: 'https://nilcoin.com/'
    },
    roambi: {
      title: 'NFTLocker',
      tag: 'NFT MARKETPLACE',
      detail:
        'Locker is the #1 source for First Minted NFTs of Top College Athletes. Every athlete is rewarded when you buy their original NFT.',
      link: 'http://nftlocker.io'
    },
    walker: {
      title: 'Enzyme Finance',
      tag: 'ASSET MANAGMENT PROTOCOL',
      detail:
        'Enzyme empowers you to build and scale vaults based on the investment strategies of your choice - from discretionary and robo to ETFs and market making. Security is our priority. Our second generation smart contract-enforced platform is thoroughly tested and audited before any mainnet deployments are made.'
    },
    powur: {
      title: 'Mydoorwallet',
      tag: 'CUSTODIAL WALLET + STAKING PLATFORM',
      detail:
        'Custodial wallet holding and purchasing $DOOR and $NIL, and also providing staking feature of those tokens.',
      link: 'http://www.powur.com/with/42'
    },
    mystand: {
      title: 'Polywhale Finance',
      tag: 'DEFI PROTOCOL',
      detail:
        'Polywhale Finance vision was and is to create one single application that can serve all your DEFI needs - and we started with farming.'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    themall: {
      title: 'Xenon Finance',
      tag: 'Impermax fork DEFI | Not recommended yet',
      detail:
        'Xenon is a decentralized LP leveraging protocol. Coming soon...'
    }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () {
    shiftSlide(-1);
  });
  $('#prev').click(function () {
    shiftSlide(1);
  });

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
